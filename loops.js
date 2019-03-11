function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;
}

function whileLoop(n) {
  let countdown = n;

    while (countdown > 0) {
      console.log(--countdown)
    }
    return "done";
  }

function doWhileLoop(num) {
<<<<<<< HEAD
var i = 0
=======

>>>>>>> 7ce38b24d75d5c26fb7231e7ed6cd5ce42ddef06
function incrementVariable() {
  i = i + 1;
  return i;
}

do {
  console.log("doo-bee-doo-bee-doo");
<<<<<<< HEAD
} while (incrementVariable() < num);
=======
} while (incrementVariable() < 5);
>>>>>>> 7ce38b24d75d5c26fb7231e7ed6cd5ce42ddef06
}