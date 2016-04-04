import Ember from 'ember';

export default Ember.Component.extend({
  updateListingForm: false,
  actions: {
    updateListingForm() {
     this.set('updateListingForm', true);
  },

   update(listing) {
     var params = {
       category: this.get('category'),
       title: this.get('title'),
       description: this.get('description'),
       price: this.get('price'),
       image: this.get('image')
     };
     this.set('updateListingForm', false);
     this.sendAction('update', listing, params);
   }
  }
});
