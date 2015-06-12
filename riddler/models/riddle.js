Riddler.Riddle = DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  body: DS.attr(),
  comments: DS.hasMany('answer', {async: true})

});
