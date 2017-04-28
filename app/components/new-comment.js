import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        commentUser: this.get('user'),
        commentBody: this.get('body'),
        commentTimestamp: (new Date()).toJSON()
      };
      this.sendAction('saveComment', params)
    }
  }
});
