const units = 230;
let totalBill = 0;

if (units >= 0 && units <= 100) {
  totalBill = units * 5;
} else if (units >= 101 && units <= 200) {
  totalBill = 100 * 5 + (units - 100) * 7;
} else if (units >= 201 && units <= 300) {
  totalBill = 100 * 5 + 100 * 7 + (units - 200) * 10;
} else if (units > 300) {
  totalBill = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 12;
} else {
  console.log("Invalid number of units");
}

console.log(totalBill);
