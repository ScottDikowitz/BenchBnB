var Index = React.createClass ({
  getInitialState: function(){
    return {benches: BenchStore.all(), marks: MarkStore.all()};
  },

  componentDidMount: function(){
    BenchStore.addChangeListener(this._changed);
    MarkStore.addChangeListener(this._changedMark);
  },

  _changedMark: function(){
    this.setState({marks: MarkStore.all()});

  },

  _changed: function(){
    this.setState({benches: BenchStore.all()});
  },

  handleHover: function(e){
    $(e.currentTarget).toggleClass("mouseover");
    // debugger;
    MarkStore.all()[parseInt(e.currentTarget.dataset.idx)].setAnimation(google.maps.Animation.BOUNCE);
  },

  handleExit: function(e){
    $(e.currentTarget).toggleClass("mouseover");
    // debugger;
    MarkStore.all()[parseInt(e.currentTarget.dataset.idx)].setAnimation(null);
  },

  render: function(){
    var that = this;
    return <div>
    <ul className="bench-names">
    {this.state.benches.map(function(bench, idx){
        return <li data-idx={idx} key={bench.id} onMouseOver={that.handleHover} onMouseOut={that.handleExit}>{bench.description}</li>;
      })}
      </ul>
        </div>;
  }
});
