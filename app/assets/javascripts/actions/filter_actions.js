FilterActions = {

  setBounds: function(bounds){
    AppDispatcher.dispatch({
      actionType: "SET_BOUNDS",
      bounds: bounds
    });

  },

  setMin: function(min){
    AppDispatcher.dispatch({
      actionType: "SET_MIN",
      min: min
    });

  },
  
  setMax: function(max){
    AppDispatcher.dispatch({
      actionType: "SET_MAX",
      max: max
    });

  }
};
