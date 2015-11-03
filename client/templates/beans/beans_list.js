Template.beansList.helpers({
  beans: function() {
    return Beans.find().fetch();
  }
});
