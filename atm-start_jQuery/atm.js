
$(document).ready(function(){
 
 // Balance 1 
var value2 =0;
  $(deposit1).on('click', function(){ 
    var value = $('#amount1').val();
    var newbalance1 = $('#balance1');
     
     value2 = parseFloat(value2) + parseFloat(value);
    newbalance1.html(value2);
    }); 


  $(withdraw1).on('click', function(){ 
    var devalue = $('#amount1').val();
    var newbalance2 = $('#balance1');
     
      value3=value2 - devalue;
    newbalance2.html(value3);
    });
 


 $('#amount1').focus(function() {
  var input = $(this);
   console.log(input);
  }); 
// End of document ready.
 });


