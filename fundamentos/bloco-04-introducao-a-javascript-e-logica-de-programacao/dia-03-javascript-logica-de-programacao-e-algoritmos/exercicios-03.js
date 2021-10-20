// Exercicios 3 - Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

let n = 5;
let asterisk = '';

for (let i = 0; i < n; i += 1) {
  
  for (let j = 0; j < n; j += 1) {
    
    if (asterisk.length < n) {
      asterisk += '-*'
      
    }
  }
  console.log(asterisk)
}