ApiActions = {
  receiveAll: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  receiveAllMarks: function(marks){
    AppDispatcher.dispatch({
      actionType: BenchConstants.MARKS_RECEIVED,
      marks: marks
    });
  }

};
