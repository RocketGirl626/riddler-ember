Riddler.Answer = DS.Model.extend({
  text: DS.attr(),
  post: DS.belongsTo('riddle', {async: true})

});
