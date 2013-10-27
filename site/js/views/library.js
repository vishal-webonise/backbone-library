var app = app || {};

app.LibraryView = Backbone.View.extend({
  el: '#books',

  events: {
    'click #add': 'addBook'
  },

  initialize: function   ( initialBooks ) {
    this.collection = new app.Library( initialBooks );
    this.render();

    this.listenTo( this.collection, 'add', this.renderBook );
  },

  // create book model and render the view for it from the form
  // submitted data
  addBook: function( event ) {
    event.preventDefault();

    var formData = {};

    $('#addBook div').children('input').each(function( i, el ){
      if ( $( el ).val() !== '' ) {
        formData[ el.id ] = $( el ).val();
      }
    });

    this.collection.add( new app.Book( formData ) );
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

