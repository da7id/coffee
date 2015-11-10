Beans = new Mongo.Collection('beans');

Meteor.methods({
  beansInsert(postAttributes) {
    var beans = _.extend(postAttributes, {
      submitted: new Date()
    });

    var beansId = Beans.insert(beans);

    return {
      _id: beansId
    };
  }
});
