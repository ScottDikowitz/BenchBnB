var ApiUtil = window.ApiUtil = {
  fetchBenches: function(bounds){
    //make an api call using AJAX in here
    $.ajax ({
      url: 'api/benches',
      type: 'GET',
      dataType: 'json',
      data: {bounds: bounds},
      success: function(data) {
        ApiActions.receiveAll(data);
      }
    });
  },

  fetchSingleBench: function(benchId){
    //make an api call using AJAX in here
    $.ajax ({
      url: 'api/benches/' + benchId,
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        ApiActions.receiveSingleBench(data);
      }
    });
  },

  createBench: function(bench){
    $.ajax ({
      url: 'api/benches',
      type: 'POST',
      dataType: 'json',
      data: {bench: bench},
      success: function(data) {
        ApiActions.createBench(data);
      }
    });

  },
  filterBenches: function(filter){
    $.ajax ({
      url: 'api/benches',
      type: 'GET',
      dataType: 'json',
      data: {bounds: filter},
      success: function(data) {
        ApiActions.receiveAll(data);
      }
    });
  },
};
