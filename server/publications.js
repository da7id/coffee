Meteor.publish('pours', function() {
  return Pours.find();
});
Meteor.publish('beans', function() {
  return Beans.find();
});
