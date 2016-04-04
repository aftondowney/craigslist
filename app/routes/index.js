import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log(this.store.findAll('category'));
    return this.store.findAll('category')
  },

  actions: {
    saveCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('index');
    },
  }
});
