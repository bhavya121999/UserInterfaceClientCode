import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  password: DS.attr('string')
});