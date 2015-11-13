

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
  }
};
