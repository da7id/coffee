Template.pourList.helpers({
  pours: function() {
    return Pours.find({},{
      sort: {brewDate: -1 } 
    });
  }
});
