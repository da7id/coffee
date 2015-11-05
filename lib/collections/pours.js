Pours = new Mongo.Collection('pours');

Meteor.methods({
  postInsert(postAttributes) {
    check(postAttributes, {
       
    });

    var pour = _.extend(postAttributes, {
      submitted: new Date()    
    });

    var pourId = Pours.insert(pour);

    return {
      _id: pourId
    };
  }
});
