var Search = React.createClass ({
  getInitialState: function(){
    return {filterParama: FilterStore.filterParams()};

  },

  componentDidMount: function(){
    FilterStore.addChangeListener(this._changed);
  },

  componentWillUnmount: function(){
    FilterStore.removeChangeListener(this._changed);
  },

  _changed: function(){
    this.setState({filterParams: FilterStore.filterParams()});
  },

  clickMapHandler: function(coords){
    // this.props.history
    this.props.history.pushState(null, "/benches/new", coords);
  },

  render: function(){
    return <div>
            <Map clickMapHandler={this.clickMapHandler}/>
            <FilterSeating/>
            <Index history={this.props.history}/>
          </div>;
        }

});
