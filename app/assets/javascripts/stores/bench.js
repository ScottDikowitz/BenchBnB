(function(){

  var _benches = [];
  var _marks = [];
  var CHANGE_EVENT = 'CHANGE';
  var BenchStore = window.BenchStore = $.extend( {},  EventEmitter.prototype);
  BenchStore.all = function(){
      //return a shallow copy so consumer cannot mutate original
      return _benches.slice(0);
  };

  BenchStore.allMarks = function(){
      //return a shallow copy so consumer cannot mutate original
      return _marks.slice(0);
  };

  BenchStore.resetBenches = function(benches){
    _benches = benches;
  };

  BenchStore.addChangeListener = function(callback){
      this.on(CHANGE_EVENT, callback);
    };
  BenchStore.removeChangeListener = function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  };


  BenchStore.dispatcherID = AppDispatcher.register(function(payload){
      if(payload.actionType === BenchConstants.BENCHES_RECEIVED){
        BenchStore.resetBenches(payload.benches);
        BenchStore.emit(CHANGE_EVENT);
      }
      else if (payload.actionType === BenchConstants.CREATE_BENCH){
        _benches.push(payload.bench);
        BenchStore.emit(CHANGE_EVENT);
      }
    });


  })();
