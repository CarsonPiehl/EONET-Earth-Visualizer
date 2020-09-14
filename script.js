var server = "https://eonet.sci.gsfc.nasa.gov/api/v3";

     $( document ).ready(function() {
        $.getJSON( server + "/events", {
            status: "open",
            limit: 20
        })
            .done(function( data ) {
                $.each( data.events, function( key, event ) {
                    $( "#eventList" ).append(
                        "<dt class='event'>" +
                        "<a href='#' onclick='showLayers(\"" + event.id+ "\");'>" +
                        event.title + "</a></dt>"
                    );
                    if (event.description != null &&event.description.length) {
                        $( "#eventList" ).append(
                            "<dd>" + event.description + "</dd>"
                        );
                    }
                });
            });
    });

    function showLayers(eventId) {
        $( "#eventSelect" ).hide();
        $( "#layerSelect" ).show();

        $.getJSON( server + "/events/" + eventId )
            .done(function( event ) {
                var location = event.geometry[0];

                $( "#eventTitle" ).append(": "+event.title+", "+location.date.substring(0,10));

                $.each( event.categories, function( key, category ) {
                    $( "#layerList" ).append(
                        "<dt>"+category.title+"</dt> "
                    );

                    $.getJSON( server + "/layers/" + category.id )
                        .done(function( data ) {
                            var layers = data['categories'][0]['layers'];
                            $.each( layers, function( key, layer ) {
                                if (layer.serviceTypeId == "WMTS_1_0_0") {
                                    $( "#layerList" ).append(
                                        "<dd>" +
                                        "<a href='#' onclick='showMap(\"" + encodeURIComponent(JSON.stringify(layer)) + "\", \"" + encodeURIComponent(JSON.stringify(location)) + "\");'>" +
                                        layer.name+"</a></dd> "
                                    );
                                }
                            });
                        });
                });
            });
    }

    function showMap(encodedLayer, encodedLocation) {
        var layer = JSON.parse(decodeURIComponent(encodedLayer));
        var location = JSON.parse(decodeURIComponent(encodedLocation));

        var center = getCenter(location);

        var mapTime = new Date(location.date).toJSON().substring(0,10);

        displayMap(layer.serviceUrl, layer.name,
            center, mapTime,
            layer.parameters[0].FORMAT, layer.parameters[0].TILEMATRIXSET);
    }

    function getCenter(geojson) {
        if (geojson.type == "Point") {
            return geojson.coordinates;
        } else if (geojson.type == "Polygon") {
            var ullat = geojson.coordinates[0][0][1] + 90;
            var ullon = geojson.coordinates[0][0][0] + 180;
            var lrlat = geojson.coordinates[0][0][1] + 90;
            var lrlon = geojson.coordinates[0][0][0] + 180;

            for (i = 0; i < geojson.coordinates[0].length; i++) {

                if (geojson.coordinates[0][i][0] + 180 > ullon) {
                    ullon = geojson.coordinates[0][i][0] + 180;
                }
                if (geojson.coordinates[0][i][0] + 180 < lrlon) {
                    lrlon = geojson.coordinates[0][i][0] + 180;
                }

                if (geojson.coordinates[0][i][1] + 90 > ullat) {
                    ullat = geojson.coordinates[0][i][1] + 90;
                }
                if (geojson.coordinates[0][i][1] + 90 < lrlat) {
                    lrlat = geojson.coordinates[0][i][1] + 90;
                }
            }

            centerX = (ullon + ((lrlon - ullon) / 2)) - 180;
            centerY = (lrlat + ((ullat - lrlat) / 2)) - 90;

            return [centerX, centerY];
        }
    }

    function displayMap(serviceUrl, layerName, center, dateStr, format, matrixSet) {
        $( "#map" ).empty();

        var map = new ol.Map({
            view: new ol.View({
                maxResolution: .01,
                projection: ol.proj.get("EPSG:4326"),
                extent: [-180, -90, 180, 90],
                center: center,
                zoom: 3,
                maxZoom: 20
            }),
            target: "map",
            renderer: ["canvas", "dom"]
        });

        /*
         This determination of resolutions is based solely on the capabilities
         of the NASA GIBS WMTS as it is currently the only WMTS server represented
         in EONET. More information about GIBS: https://go.nasa.gov/1GTDj3V
         */
        var source = new ol.source.WMTS({
            url: serviceUrl + "?time=" + dateStr,
            layer: layerName,
            format: format,
            matrixSet: matrixSet,
            tileGrid: new ol.tilegrid.WMTS({
                origin: [-180, 90],
                resolutions: [
                    0.5625,
                    0.28125,
                    0.140625,
                    0.0703125,
                    0.03515625,
                    0.017578125,
                    0.0087890625,
                    0.00439453125,
                    0.002197265625
                ],
                matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                tileSize: 512
            })
        });

        var layer = new ol.layer.Tile({
            source: source
        });

        map.addLayer(layer);
    }
