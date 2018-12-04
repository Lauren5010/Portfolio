$(function(){
  $('#temp').append();
  
  // Allows the numbers in the hours-box-list to be selected 
  // (click function) and displayed in the placeholder div (hour).
  $('#hour-box-list > li').click(function(){
     $('#hour').text('').append($(this).text());
  });
  // Allows the numbers in the minute-tens-box-list to be 
  // selected (click function) and displayed in the placeholder 
  // div (minute1).
   $('#minute-tens-box-list > li').click(function(){
     $('#minute1').text('').append($(this).text());
  });
  
  // Allows the numbers in the minute-ones-box-list to be 
  // selected (click function) and displayed in the placeholder 
  // div (minute2).
   $('#minute-ones-box-list > li').click(function(){
     $('#minute2').text('').append($(this).text());
  });
  
  // Allows first selected number to be applied certain style (selected).
  // Causes the first selected number to return to its original 
  // style (removeClass)once another number within that div (siblings) 
  // is selected (toggleClass).
  $('li').click(function(){  
  $(this).toggleClass('selected').siblings().removeClass('selected');
  });
  
  });