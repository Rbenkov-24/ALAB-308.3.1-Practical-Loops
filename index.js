//------------------Part 1: Fizz Buzz------------
//order of the conditions matter

// Loop through all numbers from 1 to 100.
for (let i = 1; i <= 100; i++) {
  //If a number is divisible by both 3 and 5, log “Fizz Buzz.”
  if (i % 3 === 0 && i % 5 === 0) { //the most specific conditions must be checked first to avoid being overridden by the less specific conditions.
    console.log("Fizz Buzz");
    //If a number is divisible by 3, log “Fizz.”
  } else if (i % 3 === 0) {
    console.log("Fizz");
    //If a number is divisible by 5, log “Buzz.”
  } else if (i % 5 === 0) {
    console.log("Buzz");
    // If a number is not divisible by either 3 or 5, log the number. */
  } else {
    console.log(i);
  }
}

//------------------Part 2: Prime Time-----------

//Declare an arbitrary number, n.
let n = 4;

//Create a loop that searches for the next prime number, starting at n and incrementing from there.
while (true) {
  n++; //increment n to search for the next number (increasing the variable value by 1)
  let isPrime = true; // assuming n is a prime number

  if (n === 2) {
    isPrime = true;
  } else {
    //check if n is divisible 
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        isPrime = false;
        break; // 'break' here exit from the 'for' loop, but not from the 'while' loop
      }
    }
  }

  //As soon as you find the prime number, log that number and exit the loop.
  if (isPrime) {
    console.log(n);
    break; //exit from the while loop
  }
}

//------------------Part 3: Feeling Loopy--------
