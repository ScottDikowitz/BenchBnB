FilterActions = {
  applyFilter: function(filter){
    AppDispatcher.dispatch({
      actionType: "APPLY_FILTER",
      filter: filter
    });
  }
};
