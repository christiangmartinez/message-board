import DS from 'ember-data';

export default DS.Model.extend({
  commentUser: DS.attr(),
  commentBody: DS.attr(),
  commentTimestamp: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
