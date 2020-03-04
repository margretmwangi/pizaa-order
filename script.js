function Order(crust,size,sauce,topping){
    this.type =crust;
    this.size = size;
    this.crust = sauce;
    this.topping = topping;
    };
    Results.prototype.order = function() {
        return "You have made an order of " + this.type + " pizza  with " + this.toppings + " as toppings and " + this.crust + " for crust ."
    };
    function TotalPrice (price, quantity, delivery,toppings,crust) {
        this.price= price;
        this.quantity=quantity;
        this.delivery=delivery;
        this.toppings=toppings;
        this.crust=crust;
    };
    sizePrices = [650, 800, 1600]
    var priceToppings = [180,200,210,250,300]
    var toppingsName= ["Pepperoni" , "mushroom" , "onion" ,"sausage", " bacon"]
    var crustNames= ["Crispy", "Stuffed", "Glutton-free"]
    var crustPrices = [200,220,300]
    var deliveryPrices = [0, 500];
    var pizzaType = $('#type').val();
    var pizzaCrust = parseInt($('#crust').val());
    var pizzaSize = $('#size').val();
    var pizzaTopping = $('#top').val();
    var pizzaQty = parseInt($('#quantity').val());
    var pizzaPick = parseInt($('#delivery').val());
    var price = sizePrice[pizzaSize - 1];
    var DeliveryCost = deliverPrices[pizzapick -1]
    var toppingscost = toppingPrice[pizaaTopping -1]
    var crustCost = crustPrices[priceCrust -1]
    var topping =toppingsName[pizaaToppings -1]
    var crustNames = crustNames(priceCrust-1)
    newOrder = new Order(pizzacrust, pizzaSize, pizzasauce, pizzaTopping);
    newTotal = new Total(price, pizzaQty, DeliveryCost);
    if (pizzaPick===1){
    alert("Your order is: " + newResult.fullOrder() + ".continue to see your total bill");
    alert("your bill is: " + newTotal.finalTotal() + ".You will receive your pizza in the next few minutes");
    alert("Thanks for shopping with pizaa-order")
    }else{
        (pizzaPick===2)
            prompt("Enter your delivery information");
            alert("Your order has been received and it will be delivered. Continue to see your order details");
            alert("Your oder is: " + newOrder.fullOrder() + ".continue to see your total bill");
            alert("your bill is: " + newTotal.finalTotal() + ".You pizza will be delevered in the next 30minutes");
        }
        function submit() {
            alert();
          }
           
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
       if (name === "") {
      alert("please fill in your name");
      return false;
    } else if (email === "") {
      alert("Please fill in your name and email");
      return false;
    } else {
      alert(
        name + ", We have received your message. Thank you for contacting   us."
      );
    }
    event.preventDefault();
  }
    
    