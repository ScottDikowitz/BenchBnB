var Index = React.createClass ({
  getInitialState: function(){
    return {benches: BenchStore.all()};
  },

  componentDidMount: function(){
    BenchStore.addChangeListener(this._changed);
  },

  _changed: function(){
    this.setState({benches: BenchStore.all()});
  },

  handleHover: function(e){
    e.currentTarget;
  },
  render: function(){
    return <div>
    <ul className="bench-names">
    {this.state.benches.map(function(bench){
        return <li key={bench.id} onMouseOver={this.handleHover} >{bench.description}</li>;
      })}
      </ul>
        </div>;
  }
});
