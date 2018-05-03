require([
      "dojo/parser",
      "esri/map", 
      "dojo/dom",
      "esri/dijit/Scalebar",
      "esri/config",
      "dojo/keys",
       "esri/sniff",
        "esri/symbols/PictureMarkerSymbol",
      "esri/SnappingManager",
      "esri/dijit/Measurement",
       "esri/renderers/SimpleRenderer",
      "esri/layers/FeatureLayer",
      "esri/geometry/webMercatorUtils",
      "esri/geometry/geodesicUtils", "esri/units",
       "esri/symbols/Font",
      "esri/geometry/Point",
      "esri/tasks/DistanceParameters",
       "esri/geometry/Polyline",
      "esri/layers/GraphicsLayer",
      "esri/tasks/LengthsParameters",
      "esri/tasks/GeometryService",
      "esri/symbols/SimpleMarkerSymbol",
      "esri/symbols/TextSymbol",
      "esri/tasks/QueryTask",
      "esri/tasks/query",
       "esri/toolbars/draw",
       "dojo/on",
       "dijit/registry", 
       "esri/graphic", "esri/symbols/SimpleMarkerSymbol", "esri/symbols/SimpleLineSymbol", "esri/symbols/SimpleFillSymbol", "esri/Color",

     
      
       "esri/layers/ArcGISDynamicMapServiceLayer","dijit/form/Button", "dijit/TitlePane",
       "dojo/domReady!"
      ],function(parser,Map,dom,Scalebar,config,keys,has,PictureMarkerSymbol,SnappingManager,Measurement,SimpleRenderer,FeatureLayer,webMercatorUtils,geodesicUtils, Units,Font,Point,DistanceParameters,Polyline,GraphicsLayer,LengthsParameters,GeometryService,SimpleMarkerSymbol,TextSymbol,QueryTask,Query,Draw,on,registry,Graphic,SimpleMarkerSymbol,SimpleLineSymbol,SimpleFillSymbol,Color,ArcGISDynamicMapServiceLayer){

        parser.parse();
       var geometryService = new GeometryService("http://localhost:6080/arcgis/rest/services/Utilities/Geometry/GeometryServer");
        var lengthParams = new LengthsParameters();
      var map=new Map("mapdiv");
    var startFont = new Font('12px').setWeight(Font.WEIGHT_BOLD);
     var bodyGraphic=[];
       var symbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT, new Color([255, 0, 0]), 2), new Color([255, 255, 0, 0.5]));
       var marker = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 15,
    new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASH,
    new Color([0,0,250]), 1),
    new Color([0,0,225,0.8]));


    

        document.getElementById("remove").onclick=function(){
          map.graphics.clear();
        };        
       

       
        

      var tb=new Draw(map);
      tb.on("draw-end",addGraphic);
      
       var dynamicmap=new ArcGISDynamicMapServiceLayer("http://localhost:6080/arcgis/rest/services/newnew/MapServer");
        var pntSym1 = new PictureMarkerSymbol("../../mapjs/images/CircleBlue24.png", 24, 24);
       map.addLayer(dynamicmap);
     var sfs = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                    new Color([195, 176, 23]), 2), null);

            var parcelsLayer = new FeatureLayer("http://localhost:6080/arcgis/rest/services/newnew/MapServer/7", {
                mode: FeatureLayer.MODE_ONDEMAND,
                outFields: ["*"]
            });
            parcelsLayer.setRenderer(new SimpleRenderer(sfs));
            map.addLayers([parcelsLayer]);

            //dojo.keys.copyKey maps to CTRL on windows and Cmd on Mac., but has wrong code for Chrome on Mac
            var snapManager = map.enableSnapping({
                snapKey: has("mac") ? keys.META : keys.CTRL
            });
            var layerInfos = [{ layer: parcelsLayer }];
            snapManager.setLayerInfos(layerInfos);

            var measurement = new Measurement({
                map: map
            }, dom.byId("measurementDiv"));
            measurement.startup();
     
           
       

       registry.forEach(function (d) {
            if (d.declaredClass === "dijit.form.Button") {
                d.on("click", activateTool);
            }
        });
       var queryTask = new QueryTask("http://localhost:6080/arcgis/rest/services/newnew/MapServer/7");
        queryTask.on("complete", showResult);
         var query = new Query();
        query.returnGeometry = true;


        
       

        function activateTool() {
            var tool = null;
                switch (this.label) {
                   
                    case "框选":
                        tool = "FREEHAND_POLYGON";
                        break;

                }
                tb.activate(Draw[tool]);
            }
         function addGraphic(geometry) {
            var handgraphic = new Graphic(geometry, symbol);
            map.graphics.add(handgraphic);
            
              query.geometry = handgraphic.geometry;
            queryTask.execute(query);
            }

         function showResult(evt) {
            var resultFeatures = evt.featureSet.features;
            var graphic=[];
            for (var i = 0, il = resultFeatures.length; i < il; i++) {
             
                 graphic[i] = resultFeatures[i];
                 setTheSymbol(graphic[i]);

                /* graphicsLayer.add(graphic[i]);*/


                 map.graphics.add(graphic[i]);
            }        
            tb.deactivate();

            for(var i=0;i<graphic.length;i++){
              bodyGraphic[i]=graphic[i];
            }
            


           
          dojo.connect(map.graphics,"onClick",function(evt){
            
            
            var currentGraphic= evt.graphic.geometry;
            
            for(var i=0;i<bodyGraphic.length;i++){
              if(bodyGraphic[i].geometry==currentGraphic){

               bodyGraphic.splice(i,1);
               break;
              }
              
            }
           

               p1=currentGraphic; 
               for(var i=0;i<bodyGraphic.length;i++){                  
                    p2=bodyGraphic[i].geometry; 
                    polyline = new Polyline({"paths":[[[p1.x,p1.y], [p2.x,p2.y]]],"spatialReference":{"wkid":4326}});
                    newSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASH,
    new Color([255,156,0]), 2);
                    newGraphic = new Graphic(polyline, newSymbol);
                    map.graphics.add(newGraphic);
                   /* lengthParams.polylines= [polyline];
                    lengthParams.lengthUnit = GeometryService.UNIT_METER;
                    lengthParams.geodesic = true;*/
                    query.geometry = polyline;
                    lengths = geodesicUtils.geodesicLengths([query.geometry], Units.METERS);
                   

                    /*geometryService.lengths(lengthParams,function(distance){  */      
                    distancetext = lengths+"米";
                    tdistance = new TextSymbol(distancetext ,startFont,new Color([225,0,0]));
                    map.graphics.add(new Graphic(p2,tdistance));
                   /* });*/

                }
          });  
         
        }
        function setTheSymbol(graphic) {
                
                return graphic.setSymbol(pntSym1);
               
            }
     });