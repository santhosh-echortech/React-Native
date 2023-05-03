
// function fib(f, N) {
//     f[1] = 0
//     f[2] = 1

//     for (var i = 3; i <= N; i++)
//     console.log(i,'LOH');
//         f[i] = f[1] + f[i - 1] + f[i - 2]
// }

// function fiboTriangle(n) {
//     var N = (n * (n + 1)) / 2;
//     var f = [...Array(N + 1)];
//     fib(f, N);

//     var fiboNum = 1;

//     for (let i = 1; i <= n; i++) {
//         let result = ''
//         for (let j = 1; j <= n - i; j++) {
//             result += ' '
//         }
//         for (let k = 1; k <= i; k++) {
//             result += f[fiboNum++] + " "
//         }
//         console.log(result)
//     }
// }

// // Driver code
// var n = 5;

// fiboTriangle(n);

function fibonacci(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  function printTriangle(n) {
    for (let i = 0; i <= n; i++) {
      let line = "";
      for (let j = 0; j < i; j++) {
        line += fibonacci(j) + " ";
      }
      console.log(line.padStart(n * 2, " "));
    }
  }
  
  printTriangle(5);
  







