Riddler.RiddlesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('riddle');
  }
});
