import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  price: DS.attr(),
  image: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
