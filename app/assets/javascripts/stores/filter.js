(function(){
var _filter = {bounds: {}, min: 1, max: 12};
  var CHANGE_EVENT = 'CHANGE';
var FilterStore = window.FilterStore = $.extend( {},  EventEmitter.prototype);

FilterStore.addChangeListener = function(callback){
    this.on(CHANGE_EVENT, callback);
  };
FilterStore.removeChangeListener = function(callback){
  this.removeListener(CHANGE_EVENT, callback);
};

FilterStore.filterParams = function(){
  return _filter;
};

FilterStore.dispatcherID = AppDispatcher.register(function(payload){
    if(payload.actionType === "APPLY_FILTER"){
      _filter = payload.filter;
      BenchStore.resetBenches(payload.filter);
      BenchStore.emit(CHANGE_EVENT);
      FilterStore.emit(CHANGE_EVENT);
    }
    else if(payload.actionType === "SET_FILTER"){
      _filter = payload.filter;
      FilterStore.emit(CHANGE_EVENT);
    }
    else if(payload.actionType === "SET_BOUNDS"){
      // debugger;
      _filter.bounds = payload.bounds;
      ApiUtil.filterBenches(_filter);
      FilterStore.emit(CHANGE_EVENT);
    }
    else if(payload.actionType === "SET_MIN"){
      // debugger;
      _filter.min = payload.min;
      ApiUtil.filterBenches(_filter);
      FilterStore.emit(CHANGE_EVENT);
    }
    else if(payload.actionType === "SET_MAX"){
      // debugger;
      _filter.max = payload.max;
      ApiUtil.filterBenches(_filter);
      FilterStore.emit(CHANGE_EVENT);
    }
  });


})();
