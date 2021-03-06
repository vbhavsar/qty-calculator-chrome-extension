document.addEventListener('DOMContentLoaded', function() {

  let calc = document.getElementById('calc');
  let amountE = document.getElementById("amount");
  let priceE = document.getElementById("price");
  let resultE = document.getElementById("result");
  let copyE = document.getElementById("copy");

  amountE.focus();

  // "calculate"
  calc.addEventListener('click', function() {
    let amount = amountE.value;
    let price = priceE.value;
    if (amount == "" || price == 0 || price == "") {
      return;
    }
    var quantity = amount.replace(",", "") / price;
    if (Math.ceil(quantity) != Math.floor(quantity)) {
      quantity = quantity.toFixed(2);
    }
    resultE.innerHTML = quantity;
  }, false);

  // copy to clipboard
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

