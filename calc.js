document.addEventListener('DOMContentLoaded', function() {

  var calc = document.getElementById('calc');

  calc.addEventListener('click', function() {
    console.log("calculate button clicked");
    let amount = document.getElementById("amount").value;
    let price = document.getElementById("price").value;
    let quantity = amount / price;
    console.log("qty: "+quantity);
    document.getElementById("result").innerHTML = quantity;
  }, false)
}, false);
