$(document).ready(function() {
   $("#preloader").hide();
  
  $("#tweet").submit(function(event) {
    event.preventDefault();  

    // requires creating js object with value
    // var tweet_text = ($(this).children().first().val());
    // var data = {  tweet : tweet_text  }
    // $.post("/tweet", data, function(){

    // });

    // formats the object into key=val for params
    var tweet_text = ($(this).children().first().serialize());
    $('input[type=submit]', this).attr('disabled', 'disabled');
    $("#preloader").show();



    $.post("/tweet", tweet_text, function(response){
      console.log(response);
     $("#preloader").hide();

      $("#message").html("<h3>"+response+"</h3>");


    });

  })
});
