articleView.initAdminPage = function() {
  var template = Handlebars.compile($('#author-template').html());

  Article.numWordsByAuthor().forEach(function(stat){
    $('#author-stats').append(templateFunction(stat));
  });
  $('#blog-stats .articles').text(Article.allArticles.length);
  $('#blog-stats .words').text(Article.numWordsAll());
};
