import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        title: this.get('title'),
        user: this.get('user'),
        body: this.get('body'),
        timestamp: (new Date()).toJSON()
      };
      this.sendAction('saveQuestion', params)
    }
  }
});
