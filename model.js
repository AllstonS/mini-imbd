  var MovieModel = Backbone.Model.extend({

    urlRoot:'http://tiy-fee-rest.herokuapp.com/collections/cinema',
    idAttribute: '_id',
    defaults: function(){
      return {
        title: "Blazing Saddles",
        releaseDate: "1974",
        content: "A comedic Western about a black man becoming mayor of a gang plagued small town assisted by his drifter friend.",
      };
    },

    initialize: function(){
      console.log('This model has been initialized');
    }
});
