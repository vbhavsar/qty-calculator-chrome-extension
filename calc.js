document.addEventListener('DOMContentLoaded', function() {

  let calc = document.getElementById('calc');
  let amountE = document.getElementById("amount");
  let priceE = document.getElementById("price");
  let resultE = document.getElementById("result");
  let copyE = document.getElementById("copy");

  amountE.focus();

  calc.addEventListener('click', function() {
    let amount = amountE.value;
    let price = priceE.value;
    if (amount == 0 || price == 0) {
      return;
    }
    let quantity = amount / price;
    resultE.innerHTML = quantity;
  }, false);

  copyE.addEventListener('click', function() {
    var text = resultE.innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
  }, false);
}, false);

