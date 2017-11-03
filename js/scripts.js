//Back-end business

//Pizza, an object to represent individual pizzas
function Pizza(size, toppingsArray){
  this.size = size;
  this.toppings = toppingsArray;
  this.crust = "Original"; //for future alternate crust options
  this.price;
  this.setPrice();
}

//set the final cost of the pizza based on toppings, size and crust
Pizza.prototype.setPrice = function(){
  //set initial cost of pizza based on size
  if (this.size === "Small"){
    this.price = 10.00;
  } else if (this.size === "Medium"){
    this.price = 14.00;
  } else {
    this.price = 18.00;
  }
  //add $1 to pizza price per topping selected
  var numToppings = this.toppings.length;
  this.price += numToppings;
}

//Order, an object to represent an order of one or more pizzas
function Order(pizzas){
  this.pizzas = [];
  this.orderTotal;
  this.setOrderTotal();
}

//set the final order total based on the combined cost of all ordered pizzas
Order.prototype.setOrderTotal = function(){
  var totalCost = 0;
  for (var i = 0; i < this.pizzas.length; i++) {
    //add the price of each pizza to the total
    totalCost += this.pizzas[i].price;
  }
  this.orderTotal = "$" + totalCost;
}









//Front-end flamboyance
$(document).ready(function(){



  //when the order form is submitted
  $("#order-form").submit(function(event){
    event.preventDefault();
    var size = $("input:radio[name=pizza-size]:checked").val()
    var toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push($(this).val());
    });
    var orderedPizza = new Pizza(size, toppings);
    //#final-order is for hiding/showing
    //#pizza-list is for displaying ordered pizzas
    $("#pizza-list").append('<li>'+ orderedPizza.size + ' ' + orderedPizza.toppings + ' Pizza' +
                              '<br> Total: $' + orderedPizza.price + '</li>');
    $("#final-order").show();

  });


});
