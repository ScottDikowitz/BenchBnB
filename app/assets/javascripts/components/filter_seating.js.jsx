var FilterSeating = React.createClass ({
  getInitialState: function(){
    return {min: 1, max: 12};
  },

  minChange: function(e){
    this.setState({min: e.currentTarget.value});
    FilterActions.setMin(e.currentTarget.value);
  },

  maxChange: function(e){
    this.setState({max: e.currentTarget.value});
    FilterActions.setMax(e.currentTarget.value);
  },

  render: function(){
    return <div className="filter">
            <label>Min:
            <input type="text" value={this.state.min} onChange={this.minChange}/>
            </label>
            <label>Max:
            <input type="text" value={this.state.max} onChange={this.maxChange}/>
            </label>
          </div>;
  }
});
