Template.pourCup.rendered=function() {
  $('#brew-datepicker').datepicker({
    todayBtn: "linked",
    clearBtn: true,
    todayHighlight: true
  });
  console.log("TEST");
}

Template.pourCup.events({
  "change #beans": function(e){
    if($('#beans option:selected').val()==="add_new")
      Router.go('addBeans'); 
  }
})

Template.pourCup.helpers({
  beans: function() {
    return Beans.find().fetch();
  }
});
