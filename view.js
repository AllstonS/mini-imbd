//Model view

  var MovieView = Backbone.View.extend({
    template: _.template($('#movieTmpl').html()),
      tagName: 'article',
      initialize: function(){
        console.log(this.el);
      },
      events: {
  //      "click .editMovie": "editMovie",
        "click .deleteMovie": "removeMovie"
      },
      render: function() {
        console.log(this.el);
        var markup = this.template(this.model.toJSON());
        this.$el.html(markup);

        return this;
      },

      removeMovie: function(){
        this.$el.remove();
        this.model.destroy();
      }
});

// Collection view

  var AppView = Backbone.View.extend({
    el:$('section'),
    initialize: function (){
      console.log('app view initialized');
      this.addAllMovies();
    },
    events: {
      "click .showCreate": "showCreate",
      "submit #createMovie": "createMovie"
    },
    createMovie: function (e) {
      e.preventDefault();
      var newMovie = {
        title: $('#createMovie').find('input[name="newTitle"]').val(),
        releaseDate: $('#createMovie').find('input[name="newReleaseDate"]').val(),
        content: $('#createMovie').find('input[name="newContent"]').val()
      };

      var newModelMovie = new MovieModel(newMovie);
      mewModelMovie.save();
      console.log(this.collection.length);
      this.collection.add(newModelMovie);
      console.log(this.collection.length);
      //this.addOneMovie(newModelMovie);// alternative method
      this.addAllMovies();
      this.$el.find('#createMovie').find('input, textarea').val('');
      this.showCreate();

    },
    showCreate: function () {
      this.$el.find('#createMovie').toggleClass('show');
    },
    addOneMovie: function (post) {
      var movieView = new MovieView({model: movie});
      this.$el.append(movieView.render().el);
      },
      addAllMovies: function () {
        _.each(this.collection.models, this.addOneMovie, this)
      },
      alertMe: function () {
        alert("This is 'reel-y' fun!");
      }
    });
