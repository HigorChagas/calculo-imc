// function highAndLow(numbers){

//   let arr = numbers.split(' ').map(Number);
//   const max = Math.max(...arr).toString();
//   const min = Math.min(...arr).toString();
  
//   console.log(max + " " + min);
  

// }

// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")

// function findShort(s){
  
//   const words = s.split(' ');
//   const shortWord = words.reduce((shortestWord, currentWord) => {
//     console.log(shortestWord);
//   });
  
//   console.log(shortWord);
// }

// findShort("Let's travel abroad shall we")

// function stringToArray(string){
//   const myArray = string.split(' ');

//   console.log(myArray);
// }

// stringToArray("I love arrays they are my favorite");

// function validatePIN (pin) {
//   const numberPattern = /[^0-9]/g;

//   if(pin.match(numberPattern)) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
  
//   // if(pin.length === 4 || pin.length === 6) {
//   //   console.log(true);
//   // } else {
//   //   console.log(false);
//   // }
// } 

// validatePIN("12a34")

const solution = (str, ending) => {
  console.log(str.endsWith(ending))
  
}

solution('abcde', 'cde');
solution('abcde', 'abc')