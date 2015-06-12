Riddler.Router.map(function() {
  this.resource('riddles', {path: '/'});
  this.resource('recent-answers');
});
  this.resource('riddle', {path: '/:riddle_id'}, function(){
    this.resource('new-answer');

});
  this.resource('new-riddle');
});
