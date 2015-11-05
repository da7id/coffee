Template.pourCup.rendered=function() {
  $('#brew-datepicker').datepicker({
    todayBtn: "linked",
    clearBtn: true,
    todayHighlight: true
  });
}

Template.pourCup.events({
  'change #beans': function(e) {
    if($('#beans option:selected').val()==="add_new")
      Router.go('addBeans'); 
  },

  'submit form': function(e) {
    e.preventDefault();

    var pour = {
      brewDate: $(e.target).find('[name=brew_date]').val(),
      brewTime: $(e.target).find('[name=time_taken]').val(),
      brew:$(e.target).find('[name=brew]').val(),
      temperature: $(e.target).find('[name=temperature]').val(),
      beans: $(e.target).find('[name=beans]').val(),
      grind: $(e.target).find('[name=grind]').val()
    };

    Meteor.call('pourInsert', pour, function(error, result) {
      if(error)
        return alert(error.reason);
      Router.go('pourList');
    });
  }
});

Template.pourCup.helpers({
  beans: function() {
    return Beans.find().fetch();
  }
});
