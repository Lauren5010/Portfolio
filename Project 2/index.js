$(document).ready(function() {
  
  //Variables
  input = $("input[type=text]");
  inputP= $("input[type=password]");
  
  //Button
  button = $("button");
  
  toggleButton(); 
  
   // alert('I am a horrible alert msg. Please delete me')
  input
    .keypress(toggleButton)
    .keyup(toggleButton);
  
  inputP
    .keypress(toggleButton)
    .keyup(toggleButton);
  
  //Enable/Disable Button
  function toggleButton() {
    len = input.val().length;
    pass = inputP.val().length;

    if (len != 0 && pass != 0) {
     button
       .text("Sign In...")
       .removeAttr("disabled")
       .addClass('activeButton'); 
    }     
    else {
       button.attr("disabled", "disabled");
       button.text("Sign In...");
       button.removeClass('activeButton'); 
    }
  };  
  
  //Alert Message
$('.alert-msg').hide(); 
   
  var alert = "<b>Your session has expired</b> <br> You have been automatically signed out for your protection.";
  var success = "Success";
 
  function displayAlertMsg(msg) {
    $('.alert-msg')
      .addClass('info')
      .html(msg)
      //.delay(2000)
      .slideDown(1000)
  }
  
  //Success Message
  displayAlertMsg(alert); 
  
  $('#signIn').click(function () {displayAlertMsg(success);
                                
}); 
  
});