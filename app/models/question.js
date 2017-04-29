import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  user: DS.attr(),
  body: DS.attr(),
  timestamp: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
