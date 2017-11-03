//Back-end business
function Pizza(){
  this.size;
  this.toppings = [];
  this.crust = "Original";
}

//calculate the final cost of the pizza based on toppings, size and crust
Pizza.prototype.getPrice = function(){
}









//Front-end flamboyance
$(document).ready(function(){



  //when the order form is submitted
  $("#orderForm").submit(function(event){
    event.preventDefault();


  });


});
