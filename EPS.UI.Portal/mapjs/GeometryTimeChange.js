
      require([
        "esri/map", "esri/layers/ArcGISDynamicMapServiceLayer", 
        "esri/TimeExtent", "esri/dijit/TimeSlider",
        "dojo/_base/array", "dojo/dom", "dojo/domReady!"
      ], function(
        Map, ArcGISDynamicMapServiceLayer, 
        TimeExtent, TimeSlider,
        arrayUtils, dom
      ) {
        var map = new Map("map", {
          basemap: "satellite",
          center: [117.09, 34.45],
          zoom: 12,
          logo:false,

        });
      
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
      });