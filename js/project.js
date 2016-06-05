$(document).ready(function(){

  $(".about").click(function() {
    $("#toggle_about").toggle(1000);
    $(".jumbotron").toggleClass("large");
  });

  $(".cv").click(function() {
    $("#toggle_cv").toggle(1000);
    $(".jumbotron").toggleClass("large");
  });

  $(".design").click(function() {
    $("#toggle_design").toggle(1000);
    $(".jumbotron").toggleClass("extralarge");
  });

  $(".photography").click(function() {
    $("#toggle_photography").toggle(1000);
    $(".jumbotron").toggleClass("large");
  });

  $(".writing").click(function() {
    $("#toggle_writing").toggle(1000);
    $(".jumbotron").toggleClass("large");
  });


});
