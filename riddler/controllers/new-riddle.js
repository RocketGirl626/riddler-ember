Riddler.NewRiddlerController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newRiddle = this.store.createRecord('riddle', {
        title: this.get('title'),
        body: this.get('body')
      });
      newRiddle.save();
      this.transitionToRoute('riddles');
    }
  }


});
