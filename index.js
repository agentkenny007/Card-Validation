let luhn = cardNum => cardNum && typeof cardNum === 'string' && Number(cardNum.replace(/\s/g,'')) && cardNum
    .replace(/\s/g, '').split('').reverse()
    .map((digit, index) => index % 2 === 1 ?
      (Number(digit) * 2).toString().length > 1 ?
        Number((Number(digit) * 2).toString()[0]) + Number((Number(digit) * 2).toString()[1])
        : Number(digit) * 2
      : Number(digit))
    .reduce((a, b) => a + b) % 10 === 0;

(function validateCard(){
    let input = prompt("Please enter a credit card number to verify.");
    if (input && luhn(input)) alert("Credit card number is VALID.");
    else if (input) alert("Credit card number is INVALID.");
    if (input) validateCard();
})();
