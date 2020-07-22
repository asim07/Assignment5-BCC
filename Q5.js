var num = 760;
var hundred = 0;
var fifty = 0;
var ten = 0;
for (i = 0; i <= num; i++) {
  if (num >= 100) {
    hundred = parseInt(num / 100);
    num = num % 100;
  }
  if (num >= 50 && num <= 100) {
    fifty = parseInt(num / 50);
    num = num % 50;
  }
  if (num >= 10 && num <= 50) {
    ten = parseFloat(num / 10);
    num = num % 10;
  }
}
console.log(
  "You will have ",
  hundred,
  " Hundred notes ",
  fifty,
  " fifty notes ",
  ten,
  " ten notes"
);
