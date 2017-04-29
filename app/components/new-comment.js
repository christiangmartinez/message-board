import Ember from 'ember';

export default Ember.Component.extend({
  addingComment: false,

  actions: {
    saveComment() {
      var params = {
        commentUser: this.get('commentUser'),
        commentBody: this.get('commentBody'),
        commentTimestamp: (new Date()).toJSON(),
        question: this.get('question')
      };
      this.set('addingComment', false);
      this.sendAction('saveComment', params);
    },
    showForm: function(){
      this.set('addingComment', true);
    }
  }
});
