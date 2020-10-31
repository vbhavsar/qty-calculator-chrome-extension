document.addEventListener('DOMContentLoaded', function() {

  let calc = document.getElementById('calc');
  let amountE = document.getElementById("amount");
  let priceE = document.getElementById("price");
  let resultE = document.getElementById("result");

  calc.addEventListener('click', function() {
    let amount = amountE.value;
    let price = priceE.value;
    if (amount == 0 || price == 0) {
      return;
    }
    let quantity = amount / price;
    resultE.innerHTML = quantity;
  }, false)
}, false);

