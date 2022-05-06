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

// const solution = (str, ending) => {
//   console.log(str.endsWith(ending))
  
// }

// solution('abcde', 'cde');
// solution('abcde', 'abc')

// const isSquare = (n) => {
//   if(n < 0) console.log(false)

//   const squareRoot = Math.floor(Math.sqrt(n));
//   const squareNumber = (squareRoot * squareRoot);
//   console.log(Math.floor(squareNumber), n, squareRoot);

//   console.log(squareNumber === n ? true : false);


// }

// isSquare(27);

// const findNeedle = (haystack) => {
//   const needleIndex = haystack.findIndex(haystack => haystack === 'needle');
  
//   console.log()

// }

// findNeedle([1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54]);

// const greet = (language) => {
//   const database = {
//     english: 'Welcome',
//     czech: 'Vitejte',
//     danish: 'Velkomst',
//     dutch: 'Welkom',
//     estonian: 'Tere tulemast',
//     finnish: 'Tervetuloa',
//     flemish: 'Welgekomen',
//     french: 'Bienvenue',
//     german: 'Willkommen',
//     irish: 'Failte',
//     italian: 'Benvenuto',
//     latvian: 'Gaidits',
//     lithuanian: 'Laukiamas',
//     polish: 'Witamy',
//     spanish: 'Bienvenido',
//     swedish: 'Valkommen',
//     welsh: 'Croeso'
//   }
  
//   !database[language] ? console.log('testando') : console.log(database[language]);
  
// }

// greet('spanish');

// const binaryArrayToNumber = arr => {
//     let dec = 0;
//     for(let i = 0;i < arr.length; i++) {
//         dec += Math.pow(2, i) * arr[arr.length - i - 1];
//     }

//     console.log(dec);
// };

// binaryArrayToNumber([0,0,0,1])

// function isPalindrome(x) {
//     const reverseString = x.split('').reverse().join('').toLowerCase();
    
//     console.log(x.toLowerCase() === reverseString ? true : false);
    
// }

// isPalindrome("Texto");

// function howMuchILoveYou(nbPetals) {
//     let = count = '';
//     const love = [
//         'I love you',
//         'a little',
//         'a lot',
//         'passionately',
//         'madly',
//         'not at all'
//     ];

//     for(let i = 0; i < love.length; i++) {
//         console.log(love[7]);
//     }
// }

// howMuchILoveYou(3)

const arithmetic = (a, b, operator) => {

    switch(operator) {
        case 'add':
            console.log(a + b);
            break;
        case 'subtract':
            console.log(a - b);
            break;
        case 'multiply':
            console.log(a * b);
            break;
        case 'divide':
            console.log(a / b);
            break;
        default:
            console.log('ERROR');
    }
}

arithmetic(5, 2, 'subtract');