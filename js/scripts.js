//Back-end business
var pizzaCounter = 1;
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
function Order(){
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

  //when the "add another pizza" button is pressed
  $("#add-pizza").click(function(){
    //YIKES! must find a way to DRY up this form generation
    $(".order-pizzas").append(
      '<div class="new-pizza">' +
        '<div class="form-control form-group size">' +
          '<legend>Pizza size:</legend>' +
          '<div class="form-check">' +
            '<label class="form-check-label">' +
              '<input type="radio" name="pizza-size' + pizzaCounter + '" class="form-check-input" value="Small" checked>' +
            'Small - $10' +
            '</label>' +
          '</div>' +
          '<div class="form-check">' +
            '<label class="form-check-label">' +
              '<input type="radio" name="pizza-size' + pizzaCounter + '" class="form-check-input" value="Medium">' +
            'Medium - $14' +
            '</label>' +
          '</div>' +
          '<div class="form-check">' +
            '<label class="form-check-label">' +
              '<input type="radio" name="pizza-size' + pizzaCounter + '" class="form-check-input" value="Large">' +
            'Large - $18' +
            '</label>' +
          '</div>' +
        '</div>' +
        '<div class="form-control form-group toppings">' +
          '<legend>Pizza toppings (+$1 each):</legend>' +
          '<div class="form-check">' +
            '<label class="form-check-label">' +
              '<input type="checkbox" name="toppings" class="form-check-input" value="Pepperoni">' +
            'Pepperoni' +
            '</label>' +
          '</div>' +
          '<div class="form-check">' +
            '<label class="form-check-label">' +
              '<input type="checkbox" name="toppings" class="form-check-input" value="Olive">' +
            'Olive' +
            '</label>' +
          '</div>' +
          '<div class="form-check">' +
            '<label class="form-check-label">' +
              '<input type="checkbox" name="toppings" class="form-check-input" value="Mushroom">' +
            'Mushroom' +
            '</label>' +
          '</div>' +
          '<div class="form-check">' +
            '<label class="form-check-label">' +
              '<input type="checkbox" name="toppings" class="form-check-input" value="Green Pepper">' +
            'Green Pepper' +
            '</label>' +
          '</div>' +
          '<div class="form-check">' +
            '<label class="form-check-label">' +
              '<input type="checkbox" name="toppings" class="form-check-input" value="Onion">' +
            'Onion' +
            '</label>' +
          '</div>' +
          '<div class="form-check">' +
            '<label class="form-check-label">' +
              '<input type="checkbox" name="toppings" class="form-check-input" value="Sausage">' +
            'Sausage' +
            '</label>' +
          '</div>' +
          '<div class="form-check">' +
            '<label class="form-check-label">' +
              '<input type="checkbox" name="toppings" class="form-check-input" value="Artichoke">' +
            'Artichoke' +
            '</label>' +
          '</div>' +
          '<div class="form-check">' +
            '<label class="form-check-label">' +
              '<input type="checkbox" name="toppings" class="form-check-input" value="Canadian Bacon">' +
            'Canadian Bacon' +
            '</label>' +
          '</div>' +
          '<div class="form-check">' +
            '<label class="form-check-label">' +
              '<input type="checkbox" name="toppings" class="form-check-input" value="Pineapple">' +
            'Pineapple' +
            '</label>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
    pizzaCounter++;
  });


  //when the order form is submitted
  $("#order-form").submit(function(event){
    event.preventDefault();
    //create a new order to hold pizzas
    order = new Order();
    $(".new-pizza").each(function() {
      var thisName = $(this).find("input:radio").attr("name");
      var size = $(this).find("input:radio[name="+thisName+"]:checked").val();
      var toppings = [];
      $(this).find("input:checkbox[name=toppings]:checked").each(function(){
        toppings.push($(this).val());
      });
      var pizza = new Pizza(size, toppings);
      order.pizzas.push(pizza);
      //#final-order is for hiding/showing
      //#pizza-list is for displaying ordered pizzas
      $("#pizza-list").append('<li>'+ pizza.size + ' ' + pizza.toppings.join(", ") + ' Pizza' +
                              '<br> Total: $' + pizza.price + '</li>');

    });
    $("#final-order").show();
  });
});//end of document ready function
