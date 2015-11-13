

var ApiUtil = window.ApiUtil = {
  fetchBenches: function(){
    //make an api call using AJAX in here
    $.ajax ({
      url: 'api/benches',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        ApiActions.receiveAll(data);
      }
    });
  }
};
