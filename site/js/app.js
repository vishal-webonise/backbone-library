var app = app || {};

$(function(){
  var books = [
    { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', releaseDate: '2008', keywords: 'JavaScript Programming' },
    { title: 'The Little Book on CoffeeScript', author: 'Alex McCaw', releaseDate: '2012', keywords: 'CoffeeScript Programming' },
    { title: 'Scala for the Impatient', author: 'Cay S. Hortsmann', releaseDate: '2012', keywords: 'Scala Programming' },
    { title: 'Americal Psycho', author: 'Bret Easton Ellis', releaseDate: '1991', keywords: 'Novel Splatter' },
    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', releaseDate: '2011', keywords: 'JavaScript Programming' }
  ];

  new app.LibraryView( books );
});

