var BenchForm = React.createClass ({


  render: function(){
    return <div>
              <form>
                <label>lat
                <input type="text"/>
                </label>
                <label>lng
                <input type="text"/>
                </label>
                <label>description
                <textarea></textarea>
                </label>
                <input type="submit"/>
              </form>

          </div>;

  }

});
