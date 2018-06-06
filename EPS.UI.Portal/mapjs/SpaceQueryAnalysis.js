var map, routeTask, routeParams, routes = [];
var stopSymbol, barrierSymbol, routeSymbol;
var mapOnClick_addStops_connect = null, mapOnClick_addBarriers_connect = null;
var handle;

require(["dojo/parser", "dojo/dom", "dojo/keys", "esri/config", "esri/sniff", "esri/SnappingManager", "esri/dijit/Measurement", "esri/layers/FeatureLayer", "esri/renderers/SimpleRenderer", "esri/tasks/GeometryService", "esri/layers/ArcGISDynamicMapServiceLayer", "dijit/registry", 'dojo/on', "esri/map", "esri/geometry/Extent", "esri/SpatialReference", "esri/InfoTemplate", "esri/layers/ArcGISTiledMapServiceLayer", "esri/graphic", "esri/toolbars/draw",
        "esri/dijit/Scalebar",
        "dijit/layout/BorderContainer",
        "dijit/layout/ContentPane",
        "dijit/TitlePane",
        "dijit/form/CheckBox",
        "esri/symbols/PictureMarkerSymbol", "esri/symbols/SimpleLineSymbol", "esri/symbols/SimpleFillSymbol", "esri/Color",
        "esri/tasks/QueryTask", "esri/tasks/query", "dojo/_base/array", "dojo/data/ItemFileReadStore", 
    "esri/urlUtils", 
    "esri/symbols/SimpleMarkerSymbol", 
    "esri/tasks/RouteTask", "esri/tasks/RouteParameters", "esri/tasks/FeatureSet",



      "esri/dijit/Measurement",
    
      "esri/geometry/webMercatorUtils",
      "esri/geometry/geodesicUtils", "esri/units",
       "esri/symbols/Font",
      "esri/geometry/Point",
      "esri/tasks/DistanceParameters",
       "esri/geometry/Polyline",
      "esri/layers/GraphicsLayer",
      "esri/tasks/LengthsParameters",
     
     
      "esri/symbols/TextSymbol",
       "dojo/dom-geometry",
        "dojo/_base/array",
        "dojo/dom-construct",
        "dojo/_base/window",
        "thethirdjs/ChartInfoWindow",
        "thethirdjs/geometryUtils",
    "thethirdjs/HeatmapLayer",
          "esri/dijit/BasemapToggle",
          "esri/basemaps",
    "esri/dijit/Search",
    "esri/dijit/HomeButton",
    "esri/dijit/LocateButton",  
    "esri/geometry/webMercatorUtils",
     "dojox/grid/DataGrid",
        "dijit/form/Button", "dojo/domReady!"],
    function (parser, dom, keys, esriConfig, has, SnappingManager, Measurement, FeatureLayer, SimpleRenderer, GeometryService, ArcGISDynamicMapServiceLayer, registry, on, Map, Extent, SpatialReference, InfoTemplate, ArcGISTiledMapServiceLayer, Graphic, Draw,
            Scalebar, BorderContainer, ContentPane, TitlePane, CheckBox, PictureMarkerSymbol, SimpleLineSymbol, SimpleFillSymbol, Color,
            QueryTask, Query, array, ItemFileReadStore,
            urlUtils,SimpleMarkerSymbol,
        RouteTask, RouteParameters, FeatureSet,


       Measurement,webMercatorUtils,geodesicUtils, Units,Font,Point,DistanceParameters,Polyline,GraphicsLayer,LengthsParameters,TextSymbol,
       domGeometry,
       array, domConstruct, win, ChartInfoWindow, geometryUrils, HeatmapLayer, BasemapToggle, esriBasemaps, Search, HomeButton, LocateButton,webMercatorUtils

        ) {
        
        parser.parse();
        
        esriBasemaps.delorme = {
            baseMapLayers: [
                //中国矢量地图服务  
                { url: "http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer" }
            ],
            //缩略图  
            thumbnailUrl: "../../mapjs/images/topo.jpg",
            title: "矢量图"
        };  
            esriConfig.defaults.geometryService = new GeometryService("http://localhost:6080/arcgis/rest/services/Utilities/Geometry/GeometryServer");
        map = new Map("map",{
                basemap: "satellite",
                center: [117.09, 34.45],
                zoom: 12,
                logo: false
            });

        map.on("load", function () {
            //after map loads, connect to listen to mouse move & drag events  
            map.on("mouse-move", showCoordinates);
            map.on("mouse-drag", showCoordinates);
        });

        var toggle = new BasemapToggle({
            map: map,
            basemap: "delorme"
        }, "BasemapToggle");
        toggle.startup();

        var search = new Search({
            map: map,
            enableInfoWindow: false
        }, "search");
        search.startup();  

        //返回主视图  
        var home = new HomeButton({
            map: map
        }, "HomeButton");
        home.startup();
         
       

         var dynamicMap = new ArcGISDynamicMapServiceLayer("http://localhost:6080/arcgis/rest/services/newnew/MapServer");
         dynamicMap.setVisibleLayers([7]);
        map.addLayer(dynamicMap);
        var featureLayer = new FeatureLayer("http://localhost:6080/arcgis/rest/services/newnew/MapServer/7", {
            mode: FeatureLayer.MODE_SNAPSHOT,
            outFields: ["*"],
           
        });
          
        var defaultSymbol = new SimpleFillSymbol().setStyle(SimpleFillSymbol.STYLE_NULL);
        var renderer = new SimpleRenderer(defaultSymbol);
        featureLayer.setRenderer(renderer);
        map.addLayer(featureLayer);

        var symbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT, new Color([255, 0, 0]), 2), new Color([255, 255, 0, 0.5]));
    	var pntSym1 = new PictureMarkerSymbol("../../mapjs/images/CircleBlue24.png", 16, 16);


         on(dom.byId("deleteresult"), "click", function () {
               dojo.disconnect(handle);
               $("#grid").hide();
                remove();
            });
        //空间查询
       
        var querytb=new Draw(map);

        querytb.on("draw-end",queryaddGraphic);

       

         on(dom.byId("areaselect"), "click", function () {
                 dojo.disconnect(handle);


                var tool = null;
                tool = "FREEHAND_POLYGON";

                querytb.activate(Draw[tool]);
                if($("#grid").is(":hidden")){  
　　　　　　          $("#grid").show();  
            }
        });
           
            //Listen for row clicks in the dojo table
            gridWidget.on("RowClick", onTableRowClick);

            //Populate table with headers
            setGridHeader();
             var queryTask = new QueryTask("http://localhost:6080/arcgis/rest/services/newnew/MapServer/7");
            queryTask.on("complete", showResult);
            var query = new Query();
            query.returnGeometry = true;
            query.outFields = ["ObjectID", "pname", "powner"];

            //info template for points returned
            var resultTemplate = new InfoTemplate();
            resultTemplate.setTitle("详细信息：");
            resultTemplate.setContent("名称： ${pname} <br/>高度： ${powner}");

            
            
          

            // 初始化查询任务与查询参数   
           

            //地图量测
            //测量控件
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
          //多点同时测距
             var measuretb=new Draw(map);
              measuretb.on("draw-end",measureaddGraphic);
          var lengthParams = new LengthsParameters();
     
          var startFont = new Font('15px').setWeight(Font.WEIGHT_BOLD);
          var bodyGraphic=[];
          on(dom.byId("measureselect"),"click",function(){
              var tool = null;
                tool = "FREEHAND_POLYGON";

                measuretb.activate(Draw[tool]);
          });
          var measureTask = new QueryTask("http://localhost:6080/arcgis/rest/services/newnew/MapServer/7");
         measureTask.on("complete", measureshowResult);
         var measurequery = new Query();
         measurequery.returnGeometry = true;
      

            //路径导航
        routeTask = new RouteTask("http://localhost:6080/arcgis/rest/services/newnew/NAServer/路径");
        routeParams = new RouteParameters();
        routeParams.stops = new FeatureSet();
        routeParams.barriers = new FeatureSet();

        stopSymbol = new SimpleMarkerSymbol().setStyle(SimpleMarkerSymbol.STYLE_CROSS).setSize(15);
        stopSymbol.outline.setWidth(3);

        barrierSymbol = new SimpleMarkerSymbol().setStyle(SimpleMarkerSymbol.STYLE_X).setSize(10);
        barrierSymbol.outline.setWidth(3).setColor(new Color([255, 0, 0]));

        routeSymbol = new SimpleLineSymbol().setColor(new Color([0, 0, 255, 0.5])).setWidth(5);


        //柱状图统计
        var chartDiv = [];
        var chartOption = [];
        var chartWindow = [];
       on(dom.byId("initMap"),"click",function(){
            map.graphics.clear();
            for(var i=0;i<chartDiv.length;i++){
               $("#"+chartDiv[i].id).remove();
           }
        });
        var bartb=new Draw(map);
        bartb.on("draw-end",barQuery);
        on(dom.byId("barChart"),"click",baractivateTool);

        //饼状图统计
        var pietb=new Draw(map);
        pietb.on("draw-end",pieQuery);
        on(dom.byId("pieChart"),"click",pieactivateTool);

        //热力图功能
         map.on('load',function(){
            heatLayer = new HeatmapLayer({
                        config: {
                            "useLocalMaximum": true,
                            "radius": 40,
                            "gradient": {
                                0.45: "rgb(000,000,255)",
                                0.55: "rgb(000,255,255)",
                                0.65: "rgb(000,255,000)",
                                0.95: "rgb(255,255,000)",
                                1.00: "rgb(255,000,000)"
                            }
                        },
                        "map": map,
                        "domNodeId": "heatLayer",
                        "opacity": 1.0,
                    });
                 
                map.addLayer(heatLayer);
                heatLayer.hide();
                });
          map.on('extent-change',function(){
            if (heatLayer.visible){
                getFeatures();
            }else{
                return null;
            }
          });
           on(dom.byId('createHeatMap'), "click", function () {
                     heatLayer.show();
                      getFeatures();
                   
                });    
             
                   
                    on(dom.byId('tog'), "click", function (){
                        
                          if (heatLayer.visible) {
                            heatLayer.hide();
                        } else {
                            heatLayer.show();
                        }
                    });
                    on(dom.byId('tog1'), "click", function () {
                        if(dynamicMap.visible)
                      dynamicMap.hide();
                      else
                        dynamicMap.show();
                    });    
    

  //以下是空间查询所需函数
   function setGridHeader() {
                var layout = [
                    { field: 'pname', name: '名称', width: "100px", headerStyles: "text-align:center;" },
                    { field: 'powner', name: '负责人', width: "100px", headerStyles: "text-align:center;" },
                    
                ];

                gridWidget.setStructure(layout);
            }


            //Draw a dojox table using an array as input
            function drawTable(features) {
                var items = []; //all items to be stored in data store

                //items = dojo.map(features, function(feature) {return feature.attributes});
                items = array.map(features, "return item.attributes");

                //Create data object to be used in store
                var data = {
                    identifier: "OBJECTID",  //This field needs to have unique values
                    label: "OBJECTID", //Name field for display. Not pertinent to a grid but may be used elsewhere.
                    items: items
                };
                var store = new ItemFileReadStore({ data: data });

                gridWidget.setStore(store);
                gridWidget.setQuery({ pname: '*' });

            }

            //Set drawing properties and add polygon to map
            function queryaddGraphic(geometry) {
                var handgraphic = new Graphic(geometry, symbol);
                map.graphics.add(handgraphic);

                // 改变信息窗口的大小
                map.infoWindow.resize(160, 95);

                // 将用户绘制的几何对象传入查询参数
                query.geometry = handgraphic.geometry;
                queryTask.execute(query);
            }

            function showResult(evt) {
                var resultFeatures = evt.featureSet.features;
                for (var i = 0, il = resultFeatures.length; i < il; i++) {
                    var graphic = resultFeatures[i];

                    //Assign a symbol sized based on populuation
                    setTheSymbol(graphic);

                    graphic.setInfoTemplate(resultTemplate);
                    map.graphics.add(graphic);
                }

                drawTable(resultFeatures);

                querytb.deactivate();
            }

            //Set the symbol based on population
            function setTheSymbol(graphic) {
                
                return graphic.setSymbol(pntSym1);
               
            }

            //calculate the total population using a featureSet
            function sumPopulation(fset) {
                var features = fset.features;
                var popTotal = 0;
                var intHolder = 0;
                for (var x = 0; x < features.length; x++) {
                    popTotal = popTotal + features[x].attributes['pheight'];
                }
                return popTotal;
            }

            //On row click
            function onTableRowClick(evt) {
                var clickedId = gridWidget.getItem(evt.rowIndex).OBJECTID;
                var graphic;
                for (var i = 0, il = map.graphics.graphics.length; i < il; i++) {
                    var currentGraphic = map.graphics.graphics[i];
                    if ((currentGraphic.attributes) && currentGraphic.attributes.OBJECTID == clickedId) {
                        graphic = currentGraphic;
                        break;
                    }
                }

                var p = map.toScreen(graphic.geometry);
                var iw = map.infoWindow;
                iw.setTitle(graphic.getTitle());
                iw.setContent(graphic.getContent());
                iw.show(p, map.getInfoWindowAnchor(p));
            }

            function remove() {
                //clear all graphics from map
                map.graphics.clear();
                map.infoWindow.hide();

                //Reset the divs to display 0
             


                drawTable();
            }
            
//以下是空间量测所需要的函数
function measureaddGraphic(geometry) {
            var handgraphic = new Graphic(geometry, symbol);
            map.graphics.add(handgraphic);
            
              measurequery.geometry = handgraphic.geometry;
            measureTask.execute(measurequery);
            }
         function measureshowResult(evt) {
            var resultFeatures = evt.featureSet.features;
            var graphic=[];
            for (var i = 0, il = resultFeatures.length; i < il; i++) {
             
                 graphic[i] = resultFeatures[i];
                 setTheSymbol(graphic[i]);

                /* graphicsLayer.add(graphic[i]);*/


                 map.graphics.add(graphic[i]);
            }        
            measuretb.deactivate();

            for(var i=0;i<graphic.length;i++){
              bodyGraphic[i]=graphic[i];
            }
            


           
           handle=dojo.connect(map.graphics,"onClick",function(evt){
            
            
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
                    polyline = new Polyline({"paths":[[[p1.x,p1.y], [p2.x,p2.y]]],"spatialReference":{"wkid":3857}});
                    newSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASH,
    new Color([255,156,0]), 2);
                    newGraphic = new Graphic(polyline, newSymbol);
                    map.graphics.add(newGraphic);
                  
                   /* lengthParams.polylines= [polyline];
                    lengthParams.lengthUnit = GeometryService.UNIT_METER;
                    lengthParams.geodesic = true;*/
                    measurequery.geometry = webMercatorUtils.webMercatorToGeographic(polyline);

                   
                    lengths = parseInt(geodesicUtils.geodesicLengths([measurequery.geometry], Units.METERS));
                    

                    /*geometryService.lengths(lengthParams,function(distance){  */      
                    distancetext = lengths+"米";
                    tdistance = new TextSymbol(distancetext ,startFont,new Color([225,255,255]));
                    map.graphics.add(new Graphic(p2,tdistance));
                   /* });*/

                }
          });  
         
        }
        //以下是柱状图统计所需要的函数
function  baractivateTool(){
             map.graphics.clear();
            
            var tool=null;
            tool= "FREEHAND_POLYGON";
            
             bartb.activate(Draw[tool]);
       }
function barQuery(geometry){
          bartb.deactivate();
         var barqueryTask=new QueryTask("http://localhost:6080/arcgis/rest/services/newnew/MapServer/7");
        var barquery=new Query();
       var handgraphic=new Graphic(geometry,symbol);
       map.graphics.add(handgraphic);
       barquery.geometry=handgraphic.geometry;
        barquery.outSpatialReference = map.spatialReference;
       
        barquery.returnGeometry=true;
        barquery.outFields=["*"];

        barqueryTask.execute(barquery);
        barqueryTask.on("complete", createBarChart);

       }
 function createBarChart(evt){

          var resultFeatures=evt.featureSet.features;
            for(var i=0; i< resultFeatures.length; i++){
                var graphic=resultFeatures[i];
                 setTheSymbol(graphic);
                var chartData= null;
                chartData= [];
                map.graphics.add(graphic);

                if(evt.featureSet.features[i].attributes[evt.featureSet.fields[3].name]!= null
                    &&evt.featureSet.features[i].attributes[evt.featureSet.fields[4].name]!= null
                    &&evt.featureSet.features[i].attributes[evt.featureSet.fields[5].name]!= null
                    &&evt.featureSet.features[i].attributes[evt.featureSet.fields[6].name]!= null
                    &&evt.featureSet.features[i].attributes[evt.featureSet.fields[7].name]!= null){

                    var nodeChart = null;
                    nodeChart = domConstruct.create("div", { id: 'nodeTest' + i, style: "top:150px; width:90px;height:90px;" }, win.body());
                    chartDiv.push(nodeChart);
                    var myChart = echarts.init(document.getElementById("nodeTest"+ i));

                    //柱状图
                    var option = {
                        tooltip: {
                            show: true
                        },
                        grid: {
                            top:'2%',
                            left: '2%',
                            right: '2%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis : [
                            {
                                type : 'category',
                                data : [{value:"08年",textStyle:{color:"white"}},
                                {value:"09年",textStyle:{color:"white"}},
                                {value:"10年",textStyle:{color:"white"}},
                                {value:"11年",textStyle:{color:"white"}},
                                {value:"12年",textStyle:{color:"white"}}],
                                 axisLine : {
                            show:true,
                            lineStyle: {
                                color: 'white'
                             }
                            }


                            }
                        ],
                        yAxis : [
                            {
                                show:true,
                                type : 'value',
                                axisLabel : {
                            formatter: '{value}',
                            textStyle: {
                                color: 'white'
                             }
                            },
                              axisLine : {
                            show:true,
                            lineStyle: {
                                color: 'white'
                             }
                            }

                        }
                        ],
                        series : [
                            {
                                "name":"生产总值",
                                "type":"bar",
                                "data":[evt.featureSet.features[i].attributes[evt.featureSet.fields[3].name],
                                    evt.featureSet.features[i].attributes[evt.featureSet.fields[4].name],
                                    evt.featureSet.features[i].attributes[evt.featureSet.fields[5].name],
                                    evt.featureSet.features[i].attributes[evt.featureSet.fields[6].name],
                                    evt.featureSet.features[i].attributes[evt.featureSet.fields[7].name]]
                            }
                        ]
                    };

                    // 为echarts对象加载数据
                    myChart.setOption(option);
                    chartOption.push(myChart);
//
                    var chartPoint= null;
                    var aoao=evt.featureSet.features[i];
                    chartPoint= new Point(aoao.geometry.x, aoao.geometry.y,map.spatialReference);
                    var chartInfo= new ChartInfoWindow({
                        map: map,
                        chart: nodeChart,
                        chartPoint: chartPoint,

                    });
                    chartWindow.push(chartInfo);
                   

                }

            }

        }
        //以下是饼状图统计所需函数
        function  pieactivateTool(){
             map.graphics.clear();
            
            var tool=null;
            tool= "FREEHAND_POLYGON";
            
             pietb.activate(Draw[tool]);
       }
       function pieQuery(geometry){
         pietb.deactivate();
         var piequeryTask=new QueryTask("http://localhost:6080/arcgis/rest/services/newnew/MapServer/7");
        var piequery=new Query();
       var handgraphic=new Graphic(geometry,symbol);
       map.graphics.add(handgraphic);
       piequery.geometry=handgraphic.geometry;
        piequery.outSpatialReference = map.spatialReference;
       
        piequery.returnGeometry=true;
        piequery.outFields=["*"];

        piequeryTask.execute(piequery);
        piequeryTask.on("complete", createPieChart);
      }
      function createPieChart(evt){
             var resultFeatures=evt.featureSet.features;

             for(var i=0; i< evt.featureSet.features.length; i++){
                 var graphic=resultFeatures[i];
                 setTheSymbol(graphic);
                 map.graphics.add(graphic);
                var chartData= null;
                chartData= [];

                if(evt.featureSet.features[i].attributes[evt.featureSet.fields[3].name]!= null
                    &&evt.featureSet.features[i].attributes[evt.featureSet.fields[4].name]!= null
                    &&evt.featureSet.features[i].attributes[evt.featureSet.fields[5].name]!= null
                    &&evt.featureSet.features[i].attributes[evt.featureSet.fields[6].name]!= null
                    &&evt.featureSet.features[i].attributes[evt.featureSet.fields[7].name]!= null){

                    var nodeChart = null;
                    nodeChart = domConstruct.create("div", { id: 'nodeTest' + i, style: "top:150px;width:400px;height:100px;" }, win.body());
                    chartDiv.push(nodeChart);
                    var myChart = echarts.init(document.getElementById("nodeTest"+ i));

                    //柱状图
                    var option = {
                         tooltip : {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        series :[
                            {
                                name:'生产总值',
                                type:'pie',
                                radius : '60%',
                                center: ['50%', '50%'],
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'outside',
                                        formatter: "{b}:{d}%",
                                        color: 'white'
                                    }
                                },
                                data:[
                                    {value: evt.featureSet.features[i].attributes[evt.featureSet.fields[3].name], name:'08年'},
                                    {value:evt.featureSet.features[i].attributes[evt.featureSet.fields[4].name], name:'09年'},
                                    {value: evt.featureSet.features[i].attributes[evt.featureSet.fields[5].name], name:'10年'},
                                    {value: evt.featureSet.features[i].attributes[evt.featureSet.fields[6].name], name:'11年'},
                                    {value:evt.featureSet.features[i].attributes[evt.featureSet.fields[7].name], name:'12年'}
                                ]
                            }
                        ]
                    };

                    // 为echarts对象加载数据
                    myChart.setOption(option);
                    chartOption.push(myChart);
//
                    var chartPoint= null;
                    var aoao=evt.featureSet.features[i];
                    chartPoint= new Point(aoao.geometry.x, aoao.geometry.y,map.spatialReference);
                    var chartInfo= new ChartInfoWindow({
                        map: map,
                        chart: nodeChart,
                        chartPoint: chartPoint,

                    });
                    chartWindow.push(chartInfo);
                   

                }

            }
        }
        //热力图所需函数
        function getFeatures() {
                    // 创建查询
                    var heatquery = new Query();
                    // 只查询当前显示范围内的要素
                    heatquery.geometry = map.extent;
                    heatquery.where = "1=1";
                    heatquery.outSpatialReference = map.spatialReference;
                    
                    featureLayer.queryFeatures(heatquery, function (featureSet) {
                        var data = [];
                        if (featureSet && featureSet.features && featureSet.features.length > 0) {
                            data = featureSet.features;
                        }
                        // 将数据赋给热度图图层
                        heatLayer.setData(data);
                    });
                }

        function error(e){
            alert(e.message);
        }
        //显示经纬度函数
        function showCoordinates(evt) {
            //the map is in web mercator but display coordinates in geographic (lat, long)  
            var mp = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
            //display mouse coordinates  
            dom.byId("info").innerHTML = mp.x.toFixed(3) + ", " + mp.y.toFixed(3);
        }  
});
//以下是地图路径导航所需要的函数
//Begins listening for click events to add stops
function addStops() {
    removeEventHandlers();
    mapOnClick_addStops_connect = map.on("click", addStop);
}

//Clears all stops
function clearStops() {
    removeEventHandlers();
    for (var i = routeParams.stops.features.length - 1; i >= 0; i--) {
        map.graphics.remove(routeParams.stops.features.splice(i, 1)[0]);
    }
}

//Adds a stop. The stop is associated with the route currently displayed in the dropdown
function addStop(evt) {
    require(["esri/graphic"], function (Graphic) {
        var graphic = new Graphic(evt.mapPoint, stopSymbol);
        routeParams.stops.features.push(
              map.graphics.add(graphic)
            );
    });
}

//Begins listening for click events to add barriers
function addBarriers() {
    removeEventHandlers();
    mapOnClick_addBarriers_connect = map.on("click", addBarrier);
}

//Clears all barriers
function clearBarriers() {
    removeEventHandlers();
    for (var i = routeParams.barriers.features.length - 1; i >= 0; i--) {
        map.graphics.remove(routeParams.barriers.features.splice(i, 1)[0]);
    }
}

//Adds a barrier
function addBarrier(evt) {
    require(["esri/graphic"], function (Graphic) {
        var graphic = new Graphic(evt.mapPoint, barrierSymbol);
        routeParams.barriers.features.push(
              map.graphics.add(graphic)
            );
    });
}

//Stops listening for click events to add barriers and stops
function removeEventHandlers() {
    if (mapOnClick_addStops_connect != null) {
        mapOnClick_addStops_connect.remove();
    }
    if (mapOnClick_addBarriers_connect != null) {
        mapOnClick_addBarriers_connect.remove();
    }
}

//Solves the routes. Any errors will trigger the errorHandler function.
function solveRoute() {
    removeEventHandlers();
    routeTask.solve(routeParams, showRoute, errorHandler);
}

//Clears all routes
function clearRoutes() {
    for (var i = routes.length - 1; i >= 0; i--) {
        map.graphics.remove(routes.splice(i, 1)[0]);
    }
    routes = [];
}

//Draws the resulting routes on the map
function showRoute(result) {
    clearRoutes();

    var routeResults = result.routeResults;
    routes.push(
        map.graphics.add(routeResults[0].route.setSymbol(routeSymbol))
        );

    var msgs = ["服务器消息："];
    for (var i = 0; i < result.messages.length; i++) {
        msgs.push(result.messages[i].type + " : " + result.messages[i].description);
    }
    if (msgs.length > 1) {
        alert(msgs.join("\n - "));
    }
}

//Reports any errors that occurred during the solve
function errorHandler(err) {
    alert("发生错误\n" + err.message + "\n" + err.details.join("\n"));
}
