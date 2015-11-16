(function(){
var _filter = {bounds: {}, min: 0, max: 0};
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
      // debugger;
      _filter = payload.filter;
      BenchStore.resetBenches(payload.filter);
      BenchStore.emit(CHANGE_EVENT);
      FilterStore.emit(CHANGE_EVENT);
    }
  });


})();
