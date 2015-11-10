Template.addBeans.events({
  'submit form': function(e) {
    e.preventDefault();

    var beans = {
      brewer: $(e.target).find('[name=brewer]').val(),
      roast: $(e.target).find('[name=roast]').val()
    };

    Meteor.call('beansInsert', beans, function(error, result) {
      if(error)
        return alert(error.reason);
      Router.go('pourCup');
    });
  }
});
