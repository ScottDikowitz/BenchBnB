var BenchForm = React.createClass ({
  getInitialState: function(){
    return {lat: this.props.location.query.lat, lng: this.props.location.query.lng};
  },

  handleSubmit: function(e){
    e.preventDefault();
    debugger;
    ApiUtil.createBench({lat: e.currentTarget[0].value, lng: e.currentTarget[1].value, description: e.currentTarget[2].value, seating: parseInt(e.currentTarget[3].value)});
    this.props.history.pushState(null, "/");
  },

  updateLat: function(e){
    this.setState({lat: e.currentTarget[0]});
  },

  updateLng: function(e){
    this.setState({lng: e.currentTarget[1]});
  },


  render: function(){
    return <div className="create-bench-form">
              <form onSubmit={this.handleSubmit}>
                <label>lat
                <input type="text" value={this.state.lat} onChange={this.updateLat}/>
                </label>
                <label>lng
                <input type="text" value={this.state.lng} onChange={this.updateLng}/>
                </label>
                <label>description
                <textarea></textarea>
                </label>
                <label>seating
                <input type="text"/>
                </label>
                <input type="submit" value="post"/>
              </form>
          </div>;

  }

});
