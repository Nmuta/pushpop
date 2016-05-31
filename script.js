var counter = 0;
var collection = [];
$(document).ready(function (){
  console.log("welcome ! ");
})

$("#trigger").on("click", function(){
  console.log("button has been clicked !");
//  var add = document.getElementById("add_stuff").value;
  if document.getElementById("add_stuff").value != " ") {
  collection.push(add);
  var feedback = "<ul>";
  for (i=0; i<collection.length; i++) {
    feedback += ("<li>" + collection[i] + "</li>");
  }
  feedback += "</ul>";
  $(".feedback").html(feedback);
  document.getElementById("add_stuff").value=" ";
});
