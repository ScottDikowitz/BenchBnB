var BenchShow = React.createClass ({

  componentDidMount: function(){
    BenchStore.addChangeListener(this._changed);
    ApiUtil.fetchSingleBench(this.props.params.benchId);
  },

  componentWillDismount: function(){
    BenchStore.removeChangeListener(this._changed);
  },

  _changed: function(){
    this.setState({thisBench: BenchStore.all()[0]});
  },

  render: function(){
    var bench;
    if (this.state !== null){
      bench = <ul className="bench-list">
                <li><span>Description: </span>{this.state.thisBench.description}</li>
                <li><span>Latitude: </span>{this.state.thisBench.lat}</li>
                <li><span>Longitude: </span>{this.state.thisBench.lng}</li>
                <li><span>Seating: </span>{this.state.thisBench.seating}</li>
              </ul>;

    }
    // var thisBench = BenchStore.all()[0];
    return <div>{bench}
            <Map/>
          </div>;
  }

});
