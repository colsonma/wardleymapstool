var MapDispatcher = require('../dispatcher/mapdispatcher');
var MapConstants = require('../constants/mapconstants');

var MapActions = {

  createNodeFromDrop: function(drop) {
    MapDispatcher.dispatch({
     actionType: MapConstants.MAP_CREATE_NODE_FROM_DROP,
     drop: drop
   });
 },

 normalize: function(params){
   MapDispatcher.dispatch({
     actionType: MapConstants.MAP_NEW_NODE,
     params : params
   });
 },

 toggleMode : function(targetAction) {
   MapDispatcher.dispatch({
    actionType: MapConstants.MAP_EDITOR_DRAG_MODE,
    targetAction : targetAction
  });
 }

};

module.exports = MapActions;