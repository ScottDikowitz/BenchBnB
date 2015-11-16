(function() {
  $(document).ready(function(){
    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;
    
    React.render(
      <Router>
        <Route path="/" component={Search}/>
      </Router>,
      document.getElementById("content")
    );


  });
})();
