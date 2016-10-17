// What is the difference between the sum of the squares of the first ten natural numbers, and the square of the sum of the first ten natural numbers?

function squareDiff(num){
  let squareSum = 0;
  let sumSquare = 0;
  for (let i = 1; i <= num; i++){
    squareSum += i;
    sumSquare += i*i;
  };
  squareSum *= squareSum;
  console.log("the sum of the squares: ", sumSquare);
  console.log("the square of the sum: ", squareSum);
  console.log("The difference: ", squareSum - sumSquare);
};

squareDiff(10);