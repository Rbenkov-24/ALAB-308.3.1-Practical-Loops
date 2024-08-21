//------------------Part 1: Fizz Buzz------------
//order of the conditions matter

// Loop through all numbers from 1 to 100.
for (let i = 1; i <= 100; i++) {
  //If a number is divisible by both 3 and 5, log “Fizz Buzz.”
  if (i % 3 === 0 && i % 5 === 0) {
    //the most specific conditions must be checked first to avoid being overridden by the less specific conditions.
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

//function to process CSV data
function processCSV(csvString) {
  let row = [];
  let cell = "";
  let rows = [];

  //Loop through the characters of a given CSV string.
  for (let i = 0; i < csvString.length; i++) {
    let char = csvString[i];

    if (char === ",") {
      //Store each “cell” of data in a variable.
      row.push(cell);
      cell = "";
    } else if (char === "\n") {
      //When you encounter the “\r\n” sequence, move to the next "row"
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }

  for (let i = 0; i < rows.length; i++) {
    console.log(rows[i].join(","));
  }
}

let csvData1 =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let csvData2 =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116, 0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.20 4,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

console.log("Processing csvData1:");
processCSV(csvData1);

console.log("Processing csvData2:");
processCSV(csvData2);
