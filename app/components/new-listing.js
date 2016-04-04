import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },
    saveListing() {
      var params = {
        category: this.get('category'),
        description: this.get('description') ? this.get('description') : "",
        price: this.get('price') ? this.get('price') : "",
        image: this.get('image') ? this.get('image') : "",

      };
      this.set('addNewListing', false);
      this.sendAction('saveListing', params);
    }
  }
});
