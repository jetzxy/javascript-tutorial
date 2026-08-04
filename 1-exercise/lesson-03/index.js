// 3a
console.log("My name is:");
// 3b
console.log("Jet");
// 3c
console.log("My name is: " + "Jet");
// 3d
console.log("Total cost: " + "$" + (5 + 3));
// 3e
console.log(`Total cost: $${5 + 3}`);
// 3f
alert("Total cost: " + "$" + (5 + 3));
// 3g
console.log("Total cost: " + "$" + Math.round(599 + 295) / 100);
// 3h
console.log(`Total cost: $${Math.round(599 + 295) / 100}`);
// 3i
alert(`Total cost: $${Math.round(599 + 295) / 100}`);
// 3j
console.log(`Total cost: $${Math.round(599 + 295) / 100}
  Thank you, come again!
  `);

//Challenge Exercises
// 3k
console.log(`Items (${2 + 2}): $${Math.round(2095 * 2 + 799 * 2) / 100}`);
// 3l
console.log(`Shipping & handling: $${Math.round(499 * 2) / 100}`);
// 3m
console.log(
  `Total before tax: $${Math.round(2095 * 2 + 799 * 2 + 499 * 2) / 100}`,
);
// 3n
console.log(
  `Estimated tax (10%): $${Math.round((2095 * 2 + 799 * 2 + 499 * 2) * 0.1) / 100}`,
);
