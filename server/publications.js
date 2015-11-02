Meteor.publish('pours', function() {
  return Pours.find();
});
