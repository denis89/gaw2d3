
$(document).ready(function(){
 
 // Checking Account 

 
var value2 = 0; 

 $(deposit1).on('click', function(){ 
    var value = $('#amount1').val();
    var newbalance1 = $('#balance1');
     
     value2 = parseFloat(value2) + parseFloat(value);
    newbalance1.html(value2);
    }); 


  $(withdraw1).on('click', function(){ 
    var devalue = $('#amount1').val();
    var newbalance2 = $('#balance1');
     
     var value2 =$('#amount1').val();

       value3= parseFloat(value2) - parseFloat(devalue);
       
       if(value3<=0){$('#balance1').css('background-color', 'red');}
       else{
    newbalance2.html(value3);}
    });


// Saving Account

var valueS = 0; 

 $(deposit2).on('click', function(){ 
    var valueST = $('#amount2').val();
    var newbalance1 = $('#balance2');
     
     valueS = parseFloat(valueS) + parseFloat(valueST);
    newbalance1.html(valueS);
    }); 


  $(withdraw2).on('click', function(){ 
    var devalue = $('#amount2').val();
    var newbalance2 = $('#balance2');
     
     var valueS =$('#amount2').val();

       value3= parseFloat(value2) - parseFloat(devalue);
       
       if(value3<=0){$('#balance2').css('background-color', 'red');}
       else{
    newbalance2.html(value3);}
    });
 


 //$('#amount1').focus(function() {
 // var input = $(this);
 //  console.log(input);
 // }); 
// End of document ready.
 });


