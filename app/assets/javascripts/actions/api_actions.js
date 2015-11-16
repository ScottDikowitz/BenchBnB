ApiActions = {

  receiveAll: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  receiveSingleBench: function(bench){
    AppDispatcher.dispatch({
      actionType: "SINGLE_BENCH",
      bench: bench
    });
  },

  receiveAllMarks: function(marks){
    AppDispatcher.dispatch({
      actionType: BenchConstants.MARKS_RECEIVED,
      marks: marks
    });
  },

  createBench: function(bench){
    AppDispatcher.dispatch({
      actionType: BenchConstants.CREATE_BENCH,
      bench: bench
    });
  }

};
