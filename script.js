// API endpoint
var server = "https://eonet.sci.gsfc.nasa.gov/api/v3";
var GIBSendpoint = "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi";
     // When document is ready (done loading)
     $( document ).ready(function() {
        // Grab the API JSON for events
        $.getJSON( server + "/events", {
            status: "open", // open events
            limit: 20 // 20 open events
        }) // when done
            .done(function( data ) {
             // for each event
                defaultMap();
                $.each( data.events, function( key, event ) {
                     // add to the list
                    $( "#eventList" ).append(
                         // list item class event
                        "<dt class='event'>" +
                         // link, onclick run showLayers function with the id, with name event.title
                        "<a href='#' onclick='showLayers(\"" + event.id+ "\");'>" +
                        event.title + "</a></dt>"
                    );
                    // if there is an event description
                    if (event.description != null &&event.description.length) {
                         // add an event description subscript
                        $( "#eventList" ).append(
                            "<dd>" + event.description + "</dd>"
                        );
                    }
                });
            });
    });
     // showLayers (called on button click)
    function showLayers(eventId) {
         // The event select list won't be shown
        $( "#eventSelect" ).hide();
         // the layerSelect will be shown
        $( "#layerSelect" ).show();

        $.getJSON( server + "/events/" + eventId )
            .done(function( event ) {
                // location is coords
                var location = event.geometry[0];
                    
               // Add the name and date of the event to the title
                $( "#eventTitle" ).append(": "+event.title+", "+location.date.substring(0,10));

                $.each( event.categories, function( key, category ) {
                     // Add Category titles in the list e.g. AIRS_Precipitation_Day
                    $( "#layerList" ).append(
                        "<dt>"+category.title+"</dt> "
                    );

                    $.getJSON( server + "/layers/" + category.id )
                        .done(function( data ) {
                            var layers = data['categories'][0]['layers'];
                            $.each( layers, function( key, layer ) {
                                if (layer.serviceTypeId == "WMTS_1_0_0") {
                                    $( "#layerList" ).append( // will show map
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


    function defaultMap() {
        var serviceURL = GIBSendpoint;
        var name = "VIIRS_SNPP_CorrectedReflectance_TrueColor";
        var center = [41.9028,12.4964];
        var time = "2020-09-18T16:30:00Z";
        var format = "image/jpeg";
        var tileMatrix = "250m";
        displayMap(serviceURL, name, center, time, format, tileMatrix);

    }

    function showMap(encodedLayer, encodedLocation) {
         // the layer (a NASA id for layer)
        var layer = JSON.parse(decodeURIComponent(encodedLayer));
         // JSON Coords
        var location = JSON.parse(decodeURIComponent(encodedLocation));
          // the center of the map
        var center = getCenter(location);
              // The time
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
                    ullon = geojson.coordinates[0][i][0] + 180; // if the longitude is greater than the biggest one yet, it is new big lon
                }
                if (geojson.coordinates[0][i][0] + 180 < lrlon) {
                    lrlon = geojson.coordinates[0][i][0] + 180; // if the longitude is smaller than the smallest one yet, it is new small lon
                }   
                 // same as above, w/ latitude

                if (geojson.coordinates[0][i][1] + 90 > ullat) {
                    ullat = geojson.coordinates[0][i][1] + 90; 
                }
                if (geojson.coordinates[0][i][1] + 90 < lrlat) {
                    lrlat = geojson.coordinates[0][i][1] + 90;
                }
            }
               // find polygon center based on extremities
            centerX = (ullon + ((lrlon - ullon) / 2)) - 180;
            centerY = (lrlat + ((ullat - lrlat) / 2)) - 90;
               // return array x y
            return [centerX, centerY];
        }
    }

    function displayMap(serviceUrl, layerName, center, dateStr, format, matrixSet) {
        $( "#map" ).empty(); // Clear existing maps

        var map = new ol.Map({
            view: new ol.View({
                maxResolution: .2, 
                projection: ol.proj.get("EPSG:4326"), // the map projection
                extent: [-180, -90, 180, 90], // Map over the whole world
                center: center, // center the map on the center coords we got earlier
                zoom: 0, // zoom at start
                maxZoom: 20 // maximum zoom
            }),
            target: "map",
            renderer: ["canvas", "dom"] // renders on canvas
        });

        /*
         This determination of resolutions is based solely on the capabilities
         of the NASA GIBS WMTS as it is currently the only WMTS server represented
         in EONET. More information about GIBS: https://go.nasa.gov/1GTDj3V
         */
         
         // NASA tileGrid source data
         
        // READ THE DOCS FOR THE API
        var source = new ol.source.WMTS({
            url: serviceUrl + "?time=" + dateStr, // the WMTS needs the time to get
            layer: layerName, // the layer we get from the button press
            format: format, // all of these we get from the JSON API data
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
