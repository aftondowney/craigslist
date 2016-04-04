import Ember from 'ember';

export function listingImage(params) {
  var listingImg = params[0].get('image');
  console.log(listingImg);

  if(listingImg !== "") {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-camera"></span>');
  }
}

export default Ember.Helper.helper(listingImage);
