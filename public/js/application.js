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
        $("#preloader").hide();
        $("#message").html("<h3>Tweet created. Love you</h3>");
          var jobId = response.job_id
          console.log(jobId);
          var complete = false
          
          while (complete === false) {            
              $.ajax({
                url: '/status/' + jobId,
                type: 'GET',
                async: false,
                dataType: 'json',
                // console.log(url);
                success: function(response) {
                  console.log(response.status); // is true a string?
                  // complete = true
                  complete = response.status;
                  if (complete) {
                    $.get('/', function(response){
                        $("#message").html("<h3>Tweet signed, sealed, delivered.</h3>");
                      // update dom with tweets...
                    })
                  }
                }
              });
          }
    });
  })
});

  // function check_status(job_id){
  //   setTimeout(function() {
  //     $.get('/status/:job_id', function(response) {
  //       console.log(response);
  //     })
  //   },1000);
  // }


// post to send data to create the tweet
// get to poll the job id when true
// get to show the right result on the page
