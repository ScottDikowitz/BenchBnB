var Map = React.createClass ({

  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(map, mapOptions);

      this.map.addListener('idle', function() {
      ApiUtil.fetchBenches();
      });

    BenchStore.addChangeListener(this._changed);
  },

  _changed: function(){
    BenchStore.all().forEach(function(bench){
      var marker = new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng},
      map: this.map,
      title: 'Hello World!'
    });
  }.bind(this));
  },

  render: function(){
    return <div className="map" ref="map"></div>;
  }
});
