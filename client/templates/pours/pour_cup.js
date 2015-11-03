Template.pourCup.rendered=function() {
  $('#brew-datepicker').datepicker({
    todayBtn: "linked",
    clearBtn: trjue,
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
