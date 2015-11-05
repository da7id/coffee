Pours = new Mongo.Collection('pours');

Meteor.methods({
  pourInsert(postAttributes) {
    var pour = _.extend(postAttributes, {
      submitted: new Date()    
    });

    var pourId = Pours.insert(pour);

    return {
      _id: pourId
    };
  }
});
