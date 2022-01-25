function addFruit(first, second) {
    first.push(second);
    return first;
  }

  const myFruits = ["🍓", "🍐", "🍎"];
  console.log(process.argv);
  const input = process.argv[3];
  if (input) {
    let result = addFruit(myFruits, input);
    console.log(result);
  } else {
    console.log("No fruit added...");
  }





// function addFruit(fruits, fruit) {
//     fruits.push(fruit);
//     // console.log(fruits);
//     return fruits;
//   }

//   const fruits = ["🍓", "🍐", "🍎"];
//   addFruit(fruits, "🥝");
// //   process.stdout.write("this should log\n");
// //   console.log("this doesn't need a carriage return");


// console.log(process.argv);