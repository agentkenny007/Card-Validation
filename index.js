let luhn = cardNum => cardNum
    .toString().split('')
    .map((digit, index) => index % 2 == 0 ?
        (Number(digit) * 2).toString().length > 1 ?
            Number((Number(digit) * 2).toString()[0]) + Number((Number(digit) * 2).toString()[1])
            : Number(digit) * 2
        : Number(digit))
    .reduce((a, b) => a + b) % 10 === 0;

(function validateCard(){
    let input = prompt("Please enter a credit card number to verify.");
    if (input && input.length == 16 && luhn(input)) alert("Credit card number is VALID.");
    else if (input) alert("Credit card number is INVALID.");
    if (input) validateCard();
})();

// def luhn_checksum(card_number):
//     digits = digits_of(card_number)
//     odd_digits = digits[-1::-2]
//     even_digits = digits[-2::-2]
//     total = sum(odd_digits)
//     for digit in even_digits:
//         total += sum(digits_of(2 * digit))
//     return total % 10
