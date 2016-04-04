import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.belongsTo('category', {async: true}),
  title: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  image: DS.attr()
});
