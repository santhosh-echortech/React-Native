/*
*
**
***
****
*****

for (let i = 1; i <= 5; i++) {
    let result = ''
    for (let j = 1; j <= 5 - i; j++) {
        result += ' '
    }
    for (let k = 1; k <= i; k++) {
        result += '*'
    }
    console.log(result)
 }
*/

/*
    *
   * *
  * * *
 * * * *
* * * * *
for (let i = 1; i <= 5; i++) {
    let result = ""
    for (let j = 1; j <= 5 - i; j++) {
        result += " "
    }
    for (let k = 1; k <= i; k++) {
        result += "* "
    }
    console.log(result)
}

*/


/*
*****
*****
*****
*****
*****

for (let i = 1; i <= 5; i++) {
    let result = ''
    for (let j = 1; j <= 5; j++) {
        result += '*'
    }
    console.log(result)
}
*/
/*
    *
   **
  ***
 ****
*****

for (let i = 1; i <= 5; i++) {
    let result = ''
    for (let j = 1; j <= 5 - i; j++) {
        result += ' '
    }
    for (let k = 1; k <= i; k++) {
        result += '*'
    }
    console.log(result)
}
*/

// for (let i = 5; i >= 1; i--) {
//     let result = ''
//     for (let j = 1; j <= i; j++) {
//         result += '*'
//     }
//     console.log(result);
// }


 for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j < i; j++) {
      row += " ";
    }
    for (let k = i; k <= 5; k++) {
      row += "*";
    }
    console.log(row);
  }





























//BMI=mass/(height*height)

// const marksWeight = 78
// const johnsWeight = 92

// const marksHeight = 1.69
// const johnsHeight = 1.95

// const CalculateBMI = (weight, height) => {
//     const bmi = weight / (height * height)
//     return bmi
// }

// const marksBMI = CalculateBMI(marksWeight, marksHeight)
// const johnsBMI = CalculateBMI(johnsWeight, johnsHeight)

// console.log(marksBMI, johnsBMI)

// if (marksBMI > johnsBMI) {
//     console.log(`Mark ${Math.round(marksBMI)} Has Highter BMI Than John ${Math.round(johnsBMI)}`)
// } else {
//     console.log(`John ${Math.round(johnsBMI)} Has Highter BMI Than Mark ${Math.round(marksBMI)} `)
// }


// for (let i = 0; i < 5; i++) {
//     let result = ''
//     for (let j = 0; j <= i; j++) {
//         result += '*'
//     }
//     console.log(result)
//     for (let k = 1; k <; k++) {

//     }
//}

// First Loop
// Second Loop
// Second Loop
// Second Loop
// Second Loop
// Second Loop
// Second Loop
// ******
// First Loop
// Second Loop
// Second Loop
// Second Loop
// Second Loop
// Second Loop
// Second Loop
// ******
// First Loop
// Second Loop
// Second Loop
// Second Loop
// Second Loop
// Second Loop
// Second Loop
// ******
// First Loop
// Second Loop
// Second Loop
// Second Loop
// Second Loop
// Second Loop
// Second Loop
// ******

// const n = 5

// for (let i = 1; i < n; i++) {
//     let result = ''
//     // console.log('First Loop')
//     for (let j = 1; j <= n; j++) {
//         if (j <= n - i) {
//             result += ' '
//         }else{
//             result+='*'
//         }
//     }
//     console.log(result)
// }

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= 5; j++) {
//       if (j <= 5 - i) {
//         row += " ";
//       } else {
//         row += "*";
//       }
//     }
//     console.log(row);
//   }


// const Average = (s1, s2, s3) => {
//     let avg = (s1 + s2 + s3) / 3
//     return avg
// }

// const TeamA = Average(96, 108, 89)
// const TeamB = Average(88, 91, 110)


// if (TeamA > TeamB) {
//     console.log('Team A Won The Match')
// } else if (TeamA < TeamB) {
//     console.log('Team B Won The Match')
// } else if(TeamA == TeamB){
//     console.log('Draw')
// }


// const n = 4; // number of rows
// for (let i = 0; i < 2 * n; i++) {
//   let row = "";
//   for (let j = 0; j < 2 * n; j++) {
//     if (i < n) {
//       if (j <= i || j >= 2 * n - 1 - i) {
//         row += "*";
//       } else {
//         row += " ";
//       }
//     }
//     else {
//       if (j <= 2 * n - 1 - i || j >= i) {
//         row += "*";
//       } else {
//         row += " ";
//       }
//     }
//   }
//   console.log(row);
// }


//Right Triangle

// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//        // console.log(i,j);
//       row += '*';
//     }
//     console.log(row);
//   }


// for (let i = 5; i >= 1; i--) {
//     let result = ' '
//     for (let j = 1; j <= i; j++) {
//         result += '*'
//     }
//     console.log(result);
// }

