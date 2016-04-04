import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategory: false,
  actions: {
    categoryFormShow() {
      this.set('addNewCategory', true);
    },
    saveCategory() {
      var params = {
        category: this.get('category'),
      };
      this.set('addNewCategory', false);
      this.sendAction('saveCategory', params);
    }
  }

});
