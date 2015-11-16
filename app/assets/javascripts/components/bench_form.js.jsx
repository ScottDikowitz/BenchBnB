var BenchForm = React.createClass ({
  getInitialState: function(){
    return {lat: "", lng: ""};
  },

  handleSubmit: function(e){
    e.preventDefault();
    ApiUtil.createBench({lat: e.currentTarget[0].value, lng: e.currentTarget[1].value, description: e.currentTarget[2].value});
  },

  updateLat: function(e){
    // this.setState({lat: });
  },

  updateLng: function(){

  },

  updateDes: function(){

  },

  render: function(){
    return <div className="create-bench-form">
              <form onSubmit={this.handleSubmit}>
                <label>lat
                <input type="text"/>
                </label>
                <label>lng
                <input type="text"/>
                </label>
                <label>description
                <textarea></textarea>
                </label>
                <input type="submit" value="post"/>
              </form>

          </div>;

  }

});
