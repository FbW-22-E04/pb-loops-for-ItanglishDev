for (let i = 1; i < 6; i++) {
  console.log("There are", i, " bottles of beer on the table.");
}

for (let i = 0; i < 21; i++) {
  if (i % 2 == 0) {
    console.log(i + " is even!");
  } else {
    console.log(i + " is odd!");
  }
}

for (let i = 0; i < 11; i++) {
  //   for (let i = 0; i < 11; i++) {}
  console.log(i * 9);
}

for (let i = 0; i < 101; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz", i);
  } else if (i % 3 == 0) {
    console.log("Fizz", i);
  } else if (i % 5 == 0) {
    console.log("Buzz", i);
  }
}
