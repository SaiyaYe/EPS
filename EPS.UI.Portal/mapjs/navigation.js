var map, routeTask, routeParams, routes = [];
var stopSymbol, barrierSymbol, routeSymbol;
var mapOnClick_addStops_connect = null, mapOnClick_addBarriers_connect = null;

require(["esri/map","esri/urlUtils",  "esri/geometry/Extent", "esri/SpatialReference",  "esri/layers/ArcGISDynamicMapServiceLayer",
    "esri/symbols/SimpleMarkerSymbol", "esri/symbols/SimpleLineSymbol", "esri/Color",
    "esri/tasks/RouteTask", "esri/tasks/RouteParameters", "esri/tasks/FeatureSet", "dojo/domReady!"],
    function (Map,urlUtils,Extent, SpatialReference, ArcGISDynamicMapServiceLayer, SimpleMarkerSymbol, SimpleLineSymbol, Color,
        RouteTask, RouteParameters, FeatureSet) {
    	

    	
        
        map = new Map("map");

        var streetMap = new ArcGISDynamicMapServiceLayer("http://localhost:6080/arcgis/rest/services/newnew/MapServer");
        map.addLayer(streetMap);

        routeTask = new RouteTask("http://localhost:6080/arcgis/rest/services/newnew/NAServer/路径");
        routeParams = new RouteParameters();
        routeParams.stops = new FeatureSet();
        routeParams.barriers = new FeatureSet();

        stopSymbol = new SimpleMarkerSymbol().setStyle(SimpleMarkerSymbol.STYLE_CROSS).setSize(15);
        stopSymbol.outline.setWidth(3);

        barrierSymbol = new SimpleMarkerSymbol().setStyle(SimpleMarkerSymbol.STYLE_X).setSize(10);
        barrierSymbol.outline.setWidth(3).setColor(new Color([255, 0, 0]));

        routeSymbol = new SimpleLineSymbol().setColor(new Color([0, 0, 255, 0.5])).setWidth(5);
});

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