$(document).ready(function (){
  console.log("welcome ! ");
  var collection = [];
})


$("#trigger").on("click", function(){
  var p = $("<p>"+add+"</p>")
  var add = $("#add_stuff").val()
  $("add_stuff").val().append($(".feedback"))
  console.log("button has been clicked !");
})
