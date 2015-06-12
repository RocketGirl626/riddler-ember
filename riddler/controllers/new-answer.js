Riddler.NewAnswerController = Ember.Controller.extend({
  needs: ['riddle'],
  actions: {
    save: function() {
      var answer = this.store.createRecord('answer', {
        text: this.get('text')
      });
      comment.save();

      var riddle = this.get('controller.riddle.model');
      riddle.get('answers').pushObject(answer);
      riddle.save();

      this.transitionToRoute('riddle', riddle.id);
    }
  }
});
