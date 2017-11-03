# Pizza Time!

#### A page where you can order the pizza of your dreams, 11/03/2017

#### By Luke Bertram

## Description

This is a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

* Allow the user to choose toppings and size for the pizza they'd like to order.  
* Create a pizza object constructor with properties for toppings and size.
* Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

## Specifications

* Should accept an order for a single small pizza and return the base cost for a small pizza with no toppings
  * Input: order - small pizza, no toppings
  * Output: Total - $10


* Accept an order of a single small, medium, or large pizza with no toppings and return the base cost for a pizza of the appropriate size
  * Input: order - sm, med, or lg pizza
  * Output: Total - $10, $14, or $18


* Accept an order of a single pizza of any size with a single topping and provide the total cost of the pizza.
  * Input: order - sm, med, or lg pizza with 1 topping
  * Output: Total - $11, $15, or $19


* Accept an order of a single pizza of any size with any number of toppings and provide the total cost of the pizza
  * Input: order - sm, med, or lg pizza with multiple toppings
  * Output: Total - sm: $10 + $1/topping; md: $14 + $1/topping; lg: $18 + $1/topping;


* Accept an order for multiple pizzas and return the total cost of all pizzas
  * Input: multiple pizza forms are submitted at once
  * Output: multiple pizzas are added to the order. The final order shows a list of each pizza, its cost, and the total cost for all pizzas.


* Allow users to select a delivery option and include a delivery fee in the total cost of the order
  * Input: user selects a "for delivery" checkbox
  * Output: a delivery fee is added to the order total


* Accept a user's address information when user selects the delivery option on the order form.
  * Input: user selects a "for delivery" checkbox
  * Output: A form to accept the user's address is displayed.


* _Require_ a user's address information when the delivery option is selected.
  * Input: user attempts to submit form with delivery selected but no address entered
  * Output: the order is not created, and an alert is displayed to the user.


  ## Setup/Installation Requirements

   For greatest ease of use, simply visit [this website](http://lukebertram.github.io/pizza/) in your web browser of choice. However, if you're feeling frisky, you can also use the following steps to clone the project from [GitHub](http://github.com) and run it locally on your own computer:

   * Visit the github page for [this project](http://github.com/lukebertram/pizza)
   * Click the "Clone or Download" button and copy the address found there. Alternatively, just copy this address to your clipboard: https://github.com/lukebertram/pizza.git
   * Access your system's command line interface (_ie Terminal, for MacOS Users_) and navigate to your home directory by entering the following magical spell into your command line (note: do not enter the '$' character):
   >$cd ~

   * Next, cast the following, more advanced spell:  
   >$git clone https://github.com/lukebertram/pizza.git

   * Finally, open the project in your system's default web browser with the following final incantation:
   >$open pizza/index.html

## Known Bugs

If there are currently any bugs in this application, I do not know about them. Please let me know if you find one.

## Support and contact details

If you know my email address, feel free to contact me there!

## Technologies Used

This project was styled using Bootstrap 4. It handles submission and processing of data with Jquery and JavaScript respectively.

### License

MIT License

Copyright (c) 2017 **Luke Bertram**
