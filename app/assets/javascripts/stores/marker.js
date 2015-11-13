(function(){
  var _marks = [];
  var CHANGE_EVENT = 'CHANGE';
  var MarkStore = window.MarkStore = $.extend( {},  EventEmitter.prototype);
  MarkStore.all = function(){
      //return a shallow copy so consumer cannot mutate original
      return _marks.slice(0);
  };

  MarkStore.resetMarks = function(marks){
    _marks = marks;
  };

  MarkStore.addChangeListener = function(callback){
      this.on(CHANGE_EVENT, callback);
    };
  MarkStore.removeChangeListener = function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  };

  MarkStore.dispatcherID = AppDispatcher.register(function(payload){
      if(payload.actionType === BenchConstants.MARKS_RECEIVED){
          AppDispatcher.waitFor([BenchStore.dispatcherID]);
          MarkStore.resetMarks(payload.marks);
          MarkStore.emit(CHANGE_EVENT);
      }
    });

})();
