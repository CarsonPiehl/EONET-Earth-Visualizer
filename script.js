// Its really cancer but it is just easier to keep the big arrays in the JS file than keep a separate text file

var LAYERS = [['GOES-East_ABI_Band2_Red_Visible_1km','png','1km'],['GOES-West_ABI_Band13_Clean_Infrared','png','2km'],['GOES-West_ABI_Air_Mass','png','2km'],['MODIS_Terra_CorrectedReflectance_Bands721','jpeg','250m'],['MODIS_Terra_L3_SurfaceReflectance_Bands143_Daily','jpeg','500m'],['MISR_Directional_Hemispherical_Reflectance_Average_Natural_Color_Monthly','png','2km'],['MISR_AM1_Ellipsoid_Radiance_RGB_AA','png','250m'],['VIIRS_SNPP_DayNightBand_ENCC','png','500m'],['OMPS_Aerosol_Index','png','2km'],['OMI_Single_Scattering_Albedo','png','2km'],['MERRA2_ISCCP_Cloud_Albedo_Monthly','png','2km'],['MISR_TOA_Albedo_Average_Red_Monthly','png','2km'],['VIIRS_NOAA20_Brightness_Temp_BandI5_Day','png','250m'],['AIRS_L3_Carbon_Dioxide_AIRS_AMSU_Monthly','png','2km'],['MLS_CO_215hPa_Day','png','2km'],['MODIS_Terra_Cloud_Effective_Radius','png','1km'],['MODIS_Terra_Cloud_Fraction_Day','png','2km'],['AMSR2_Cloud_Liquid_Water_Day','png','2km'],['MODIS_Terra_Cloud_Multi_Layer_Flag','png','1km'],['MODIS_Terra_Cloud_Phase_Infrared_Day','png','2km'],['MODIS_Terra_Cloud_Phase_Optical_Properties','png','1km'],['MODIS_Terra_Cloud_Optical_Thickness','png','1km'],['MODIS_Terra_Cloud_Top_Height_Day','png','2km'],['MODIS_Terra_Cloud_Top_Temp_Day','png','2km'],['MODIS_Terra_Cloud_Top_Pressure_Day','png','2km'],['MODIS_Terra_Cloud_Water_Path','png','1km'],['MERRA2_Convective_Rainwater_Source_700hPa_Monthly','png','2km'],['AIRS_L2_Dust_Score_Day','png','2km'],['MERRA2_Evaporation_from_Turbulence_Monthly','png','2km'],['CERES_EBAF_Surface_CRE_Net_Longwave_Flux_Monthly','png','2km'],['CERES_EBAF_TOA_Incoming_Solar_Flux_Monthly','png','2km'],['LIS_ISS_Flash_Count','png','2km'],['AIRS_L2_Methane_400hPa_Volume_Mixing_Ratio_Day','png','2km'],['MLS_HNO3_46hPa_Day','png','2km'],['OMI_Nitrogen_Dioxide_Tropo_Column','png','2km'],['MLS_N2O_46hPa_Day','png','2km'],['OMPS_Ozone_Total_Column','png','2km'],['Particulate_Matter_Below_2.5micrometers_2001-2010','png','10km'],['IMERG_Precipitation_Rate','png','2km'],['AIRS_L2_RelativeHumidity_500hPa_Da','png','2km'],['OMPS_SO2_Planetary_Boundary_Layer','png','2km'],['AIRS_L2_Temperature_500hPa_Day','png','2km'],['OMI_UV_Erythemal_Daily_Dose','png','2km'],['MODIS_Terra_Water_Vapor_5km_Day','png','2km'],['AMSR2_Wind_Speed_Day','png','2km'],['MEaSUREs_Daily_Landscape_Freeze_Thaw_AMSRE','png','2km'],['SMAP_L4_Frozen_Area','png','8km'],['MODIS_Terra_Ice_Surface_Temp_Day','png','1km'],['MEaSUREs_Ice_Velocity_Greenland','png','500m'],['MODIS_Terra_Sea_Ice','png','1km'],['MODIS_Terra_NDSI_Snow_Cover','png','500m'],['AMSRE_Snow_Depth_Over_Ice','png','2km'],['SMAP_L4_Snow_Mass','png','2km'],['AMSRU2_Snow_Water_Equivalent_Daily','png','2km'],['MERRA2_Surface_Albedo_Monthly','png','2km'],['MODIS_Combined_L3_White_Sky_Albedo_Daily','png','2km'],['SMAP_L1_Passive_Brightness_Temp_Aft_H','png','2km'],['ASTER_GDEM_Color_Index','png','31.25m'],['MERRA2_Evaporation_Land_Monthly','png','2km'],['MODIS_Terra_L4_Gross_Primary_Productivity_8Day','png','500m'],['SMAP_L4_Mean_Heterotrophic_Respiration','png','2km'],['MERRA2_Incident_Shortwave_Over_Land_Monthly','png','2km'],['MODIS_Combined_L3_IGBP_Land_Cover_Type_Annual','png','500m'],['MODIS_Terra_Land_Surface_Temp_Day','png','1km'],['MODIS_Combined_MAIAC_L3_IsotropicKernelParameters_8Day','png','500m'],['SMAP_L4_Mean_Net_Ecosystem_Exchange','png','2km'],['MODIS_Combined_L4_FPAR_4Day','png','500m'],['Aquarius_Soil_Moisture_Daily','png','2km'],['SMAP_L4_Soil_Temperature_Layer_1','png','2km'],['AIRS_L2_Surface_Air_Temperature_Day','png','2km'],['AIRS_L2_Surface_Relative_Humidity_Day','png','2km'],['MERRA2_Surface_Pressure_Monthly','png','2km'],['AIRS_L2_Surface_Skin_Temperature_Day','png','2km'],['MODIS_Terra_NDVI_8Day','png','2km'],['SMAP_L4_Emult_Average','png','2km'],['AVISO_Absolute_Dynamic_Topography','png','2km'],['MODIS_Terra_L2_Chlorophyll_A','png','1km'],['MERRA2_Open_Water_Latent_Energy_Flux_Monthly','png','2km'],['MODIS_Aqua_L2_Photosynthetically_Available_Radiatio','png','1km'],['OSCAR_Sea_Surface_Currents_Zonal','png','2km'],['JPL_MEaSUREs_L4_Sea_Surface_Height_Anomalies','png','2km'],['SMAP_L3_Sea_Surface_Salinity_REMSS_Monthly','png','2km'],['GHRSST_L4_MUR_Sea_Surface_Temperature','png','1km'],['OSM_Land_Water_Map','png','250m'],['Graticule','png','250m']];
var LAYERS_CONDENSED = [["MODIS_Terra_CorrectedReflectance_TrueColor","jpeg","250m","2003/01/01-now"], ["VIIRS_Black_Marble", "png", "500m", "2016"],["MODIS_Aqua_Aerosol","png","2km","2002/07/03-now"], ["OMPS_Ozone_Total_Column","png","2km","2012/01/26-now"],["NLDAS_Near_Surface_Air_Temperature_Primary_Monthly","png","2km","1979/01-now"],["GPW_Population_Density_2000","png",	"1km","2000"],['GPW_Population_Density_2005','png','1km',	'2005'],['GPW_Population_Density_2010','png','1km','2010'],['GPW_Population_Density_2015', 'png','1km',		'2015'],['GPW_Population_Density_2020','png','1km','2020'],['Estimated_Net_Migration_1970-1980', 'png','1km',	 '1970'],['Estimated_Net_Migration_1980-1990', 'png','1km',	 '1980'],['Estimated_Net_Migration_1990-2000', 'png','1km',	 '1990'],['NDH_Cyclone_Mortality_Risks_Distribution_2000','png', '1km',		'2000'],['NDH_Cyclone_Proportional_Economic_Loss_Risk_Deciles_2000', 'png','1km',	'2000'],['NDH_Drought_Mortality_Risks_Distribution_2000', 	'png','1km',		'2000'],['NDH_Drought_Proportional_Economic_Loss_Risk_Deciles_2000', 'png','1km',		 	'2000'],['NDH_Flood_Mortality_Risks_Distribution_2000', 	'png','1km',	 	'2000'],['NDH_Flood_Proportional_Economic_Loss_Risk_Deciles_2000','png', '1km',		 	'2000'],['NDH_Volcano_Mortality_Risks_Distribution_2000','png', '1km',		 	'2000'],['NDH_Volcano_Proportional_Economic_Loss_Risk_Deciles_2000','png', '1km',		 	'2000'],['Landsat_Human_Built-up_And_Settlement_Extent','png', '31.25m',		 	'2010']];








	


//["GPW_Population_Density_2000",	"1km",	"png",	"2000"],['GPW_Population_Density_2005', '1km',	'png',	'2005'],['GPW_Population_Density_2010', '1km',	'png', '2010'],['GPW_Population_Density_2015', '1km',	'png',	'2015'],['GPW_Population_Density_2020', '1km',	'png',	'2020'],['Estimated_Net_Migration_1970-1980', '1km',	'png', '1970'],['Estimated_Net_Migration_1980-1990', '1km',	'png', '1980'],['Estimated_Net_Migration_1990-2000', '1km',	'png', '1990'],['NDH_Cyclone_Mortality_Risks_Distribution_2000', '1km',	'png',	'2000'],['NDH_Cyclone_Proportional_Economic_Loss_Risk_Deciles_2000', '1km',	'png','2000'],['NDH_Drought_Mortality_Risks_Distribution_2000', '1km',	'png',		'2000'],['NDH_Drought_Proportional_Economic_Loss_Risk_Deciles_2000', '1km',	'png',	 	'2000'],['NDH_Flood_Mortality_Risks_Distribution_2000', '1km',	'png',	 	'2000'],['NDH_Flood_Proportional_Economic_Loss_Risk_Deciles_2000', '1km',	'png',	 	'2000'],['NDH_Volcano_Mortality_Risks_Distribution_2000', '1km',	'png',	 	'2000'],['NDH_Volcano_Proportional_Economic_Loss_Risk_Deciles_2000', '1km',	'png',	 	'2000'],['Landsat_Human_Built-up_And_Settlement_Extent', '31.25m',	'png',	 	'2010'],





$(document).ready(function() {
  LAYERS_CONDENSED.forEach(function(item, index) {
    $('#container').append( // In the html div container we add
      $('<input>').prop({ // Input radio buttons for each Layer
        type: 'radio',
        id: String(item[0]),
        name: 'layer',
        value: String(index)
      })
    ).append(
      $('<label>').prop({ // And their label
        for: String(item[0])
      }).html(String(item[0]).replace("-"," ").replace(/_/g," ")) // But we remove all the underscores and hyphens
    ).append(
      $('<br>')
    )
  })
});


// Returns true if date 1 is earlier, false if date 1 is later
function checkDates(date1, date2) {
  dateAspects1 = date1.split("/");
  year1 = parseInt(dateAspects1[0]);
  month1 = parseInt(dateAspects1[1]);
  day1 = parseInt(dateAspects1[2]);

  dateAspects2 = date2.split("/");
  year2 = parseInt(dateAspects2[0]);
  month2 = parseInt(dateAspects2[2]);
  day2 = parseInt(dateAspects2[2]);

  // Logic Tree
  if (year1 < year2) {
    return true;
  }
  else if (year1 == year2) {
    if (month1 < month2) {
      return true;
    }
    else if (month1 == month2) {
      if (day1 < day2) {
        return true;
      }
      else if (day1 == day2) {
        return false;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }

  }
  else {
    return false;
  }
}


// When the button is clicked
function mapChange() {
  var buttons = document.getElementsByName('layer');

  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].checked) { // find the checked button
      // get the layer data from the big stupid array
      var layerData = LAYERS_CONDENSED[parseInt(buttons[i].value)];
      document.getElementById("eventTitle").innerHTML = layerData[0].replace("-"," ").replace(/_/g," ");
      var optimalTime = document.getElementById("dateinput").value;
      var timeRange = layerData[3];

      // Time String Parsing
      if (timeRange.includes("-") === true) {
        var times = timeRange.split("-");
        var start = times[0];
        var end = times[1];
        if (end === 'now') {
          var today = new Date();
          var dd = String(today.getDate()).padStart(2, '0');
          var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
          var yyyy = today.getFullYear();
          end = yyyy + '-' + mm + '-' + dd;
        }
        if (checkDates(start,optimalTime) && checkDates(optimalTime,end)) {
          // we just use optimalTime
          document.getElementById("errormsg").innerHTML = "We could use your exact date!";
        }
        else if (checkDates(optimalTime, start)) {
          optimalTime = start;
          document.getElementById("errormsg").innerHTML = "The closest possible date was " + start;

        }
        else if (checkDates(optimalTime,end)) {
          optimalTime = end; // We want to use the last possible date
          document.getElementById("errormsg").innerHTML = "The closest possible date was " + end;
        } 
        if (start.split("/").length == 2)  {
          optimalTime = optimalTime.split("-");
          optimalTime = optimalTime[0] + "-" + optimalTime[1]+"-01";
        }
      }
      else {
        optimalTime = timeRange+"-01-01";
        document.getElementById("errormsg").innerHTML = "The closest possible date was " + timeRange;
      }
      document.getElementById("time").innerHTML = optimalTime;
      map(optimalTime,layerData[0],"image/"+layerData[1],layerData[2]);
      // only one radio can be selected, don't check the rest
      break;
    }
  }
}


function map(time, layer, format, matrixSet) {
  $( "#map" ).empty();
    var map = new ol.Map({
      view: new ol.View({
        projection: ol.proj.get('EPSG:4326'),
        extent: [-180, -90, 180, 90],
        center: [0, 0],
        zoom: 3,
        minZoom: 2,
        maxZoom: 8
      }),
      target: 'map',
      renderer: ['canvas', 'dom']
    });

    var finurl = 'https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi';
    if (time !== "") {
      finurl = finurl + "?TIME=" + time;
    }
    
    var source = new ol.source.WMTS({
      url: finurl,
      layer: layer,
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
  
    if (source === null) {
      finurl = 'https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi';
      var source = new ol.source.WMTS({
        url: finurl,
        layer: layer,
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
    }

    var layer = new ol.layer.Tile({
      source: source,
      extent: [-180, -90, 180, 90]
    });

    var mask = new ol.source.WMTS({
      url: "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
      layer: "MODIS_Water_Mask",
      format: "image/png",
      matrixSet: "250m",
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

    var masklayer = new ol.layer.Tile({
      source: mask,
      extent: [-180, -90, 180, 90]
    });

    map.addLayer(layer);
    map.addLayer(masklayer);

  }



window.onload = function () {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  // starting map of Earth at Night
  map("2016-01-01", "VIIRS_Black_Marble", "image/png", "500m");

}
