var app = app || {};

app.LibraryView = Backbone.View.extend({
  el: '#books',

  initialize: function   ( initialBooks ) {
    this.collection = new app.Library( initialBooks );
    this.render();
  },

  // render library by rendering each book in its collection
  render: function() {
    this.collection.each(function( book ) {
      this.renderBook( book );
    }, this );
  },

  // render a book by creating a bookView and appending the element it
  // renders to the library's element
  renderBook: function  ( book ) {
    var bookView = new app.BookView({
      model: book
    });
    this.$el.append( bookView.render().el );
  }
});

