
      require([
          "esri/map", "esri/basemaps",  "esri/layers/ArcGISDynamicMapServiceLayer", 
        "esri/TimeExtent", "esri/dijit/TimeSlider",
          "dojo/_base/array", "esri/dijit/BasemapToggle", "dojo/dom", "esri/dijit/Search", "esri/dijit/HomeButton",
          "esri/dijit/LocateButton", "esri/geometry/webMercatorUtils",    "dojo/domReady!"
      ], function(
          Map, esriBasemaps,  ArcGISDynamicMapServiceLayer, 
        TimeExtent, TimeSlider,
        arrayUtils, BasemapToggle, dom, Search, HomeButton, LocateButton, webMercatorUtils
      ) {
          esriBasemaps.delorme = {
              baseMapLayers: [
                  //中国矢量地图服务  
                  { url: "http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer" }
              ],
              //缩略图  
              thumbnailUrl: "../../mapjs/images/topo.jpg",
              title: "矢量图"
          };  
        var map = new Map("map", {
          basemap: "satellite",
          center: [117.09, 34.45],
          zoom: 12,
          logo:false,

          });

        map.on("load", function () {
            //after map loads, connect to listen to mouse move & drag events  
            map.on("mouse-move", showCoordinates);
            map.on("mouse-drag", showCoordinates);
        });
       
        var search = new Search({
            map: map,
            enableInfoWindow: false
        }, "search");
        search.startup();  

        var home = new HomeButton({
            map: map
        }, "HomeButton");
        home.startup();

        var toggle = new BasemapToggle({
            map: map,
            basemap: "delorme"
        }, "BasemapToggle");
        toggle.startup();
        var opLayer = new ArcGISDynamicMapServiceLayer("http://localhost:6080/arcgis/rest/services/newnew/MapServer");
        opLayer.setVisibleLayers([7]);

      
        //add the gas fields layer to the map 
        map.addLayers([opLayer]);

        map.on("layers-add-result", initSlider);

        function initSlider() {
          var timeSlider = new TimeSlider({
            style: "width: 100%;"
          }, dom.byId("timeSliderDiv"));
          map.setTimeSlider(timeSlider);
          
          var timeExtent = new TimeExtent();
          timeExtent.startTime = new Date("2017/1/1 UTC");
          timeExtent.endTime = new Date("2017/6/1 UTC");
          timeSlider.setThumbCount(2);
          timeSlider.createTimeStopsByTimeInterval(timeExtent, 1, "esriTimeUnitsMonths");
          timeSlider.setThumbIndexes([0,1]);
          timeSlider.setThumbMovingRate(2000);
          timeSlider.startup();
          
          //add labels for every other time stop
          var labels = arrayUtils.map(timeSlider.timeStops, function(timeStop) {
                        return timeStop.getUTCMonth()+1+"M"; 
                    });
          
                    timeSlider.setLabels(labels);
          
        
        }
          //经纬度显示函数
        function showCoordinates(evt) {
            //the map is in web mercator but display coordinates in geographic (lat, long)  
            var mp = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
            //display mouse coordinates  
            dom.byId("info").innerHTML = mp.x.toFixed(3) + ", " + mp.y.toFixed(3);
        }  
      });