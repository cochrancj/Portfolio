$(document).ready(function(){

  $(".about").click(function() {
    // $("#toggle_about").toggle(1000);
    // $(".jumbotron").toggleClass("large");
      if ($(this).data('name') == 'show'){
        $("#toggle_about").animate({
            // width: '0%'
          }).hide()
          $(".jumbotron").animate({
            // width: '100%'
          });
          $(this).data('name', 'hide')
      } else {
        $("#toggle_about").animate({
            // width: '19%'
          }).show()
          $(".jumbotron").animate({
            // width: '80%'
          });
          $(this).data('name', 'show')
      }
  });

  $(".cv").click(function() {
    $("#toggle_cv").toggle(1000);
    $(".jumbotron").toggleClass("extralarge");
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
