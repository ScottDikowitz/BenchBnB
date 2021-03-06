var Map = React.createClass ({
  // mixins: [ReactRouter.History],

  getInitialState: function(){
    return {marks: []};
  },

  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      var that = this;
      this.map = new google.maps.Map(map, mapOptions);

      this.map.addListener('idle', function() {
      var bounds = that.map.getBounds();
      var northEast = bounds.getNorthEast();
      var southWest = bounds.getSouthWest();
      var mapBounds = {
                        "northEast":{"lat": northEast.lat().toString(), "lng": northEast.lng().toString()},
                        "southWest":{"lat": southWest.lat().toString(), "lng": southWest.lng().toString()}
                      };
      // ApiUtil.fetchBenches(mapBounds);
      // debugger;
      // var filter = {mapBounds: mapBounds, min: 1, max: 12};
      FilterActions.setBounds(mapBounds);
      // ApiUtil.filterBenches(filter);
      });

      this.map.addListener('click', function(e){
        var lat = e.latLng.lat();
        var lng = e.latLng.lng();
        var latLng = {lat: lat, lng: lng};
        this.props.clickMapHandler(latLng);
      }.bind(this));

    BenchStore.addChangeListener(this._changed);
  },

  componentWillUnmount: function(){
    BenchStore.removeChangeListener(this._changed);
  },

  _changed: function(){
    this.state.marks.forEach(function(marker){
      marker.setMap(null);
    });
    var tempMarks = [];

    BenchStore.all().forEach(function(bench){
      tempMarks.push(new google.maps.Marker({
          position: {lat: bench.lat, lng: bench.lng},
          map: this.map
        }));
  }.bind(this));
    setTimeout(function(){ ApiActions.receiveAllMarks(this.state.marks);}.bind(this), 1);

  this.setState({marks: tempMarks});

  },

  render: function(){
    return <div className="map" ref="map"></div>;
  }
});
