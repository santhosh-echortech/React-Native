let n = 5
console.log('Right Triangle Star Pattern.')
for (let i = 0; i < n; i++) {
    let result = ''
    for (let j = 0; j <= i; j++) {
        result += '*'
    }
    console.log(result)
}
/*
*
**
***
****
*****
*/
console.log('Inverted Right Triangle Star Pattern.')
for (let i = 0; i < n; i++) {
    let result = ''
    for (let j = n; j > i; j--) {
        result += '*'
    }
    console.log(result)
}
/*
*****
****
***
**
*
*/
console.log('Mirrored Right Triangle Star Pattern.')
for (let i = 0; i < n; i++) {
    let result = ''
    for (let j = 0; j < n - i - 1; j++) {
        result += ' '
    }
    for (let k = 0; k <= i; k++) {
        result += '*'
    }
    console.log(result)
}

/*
    *
   **
  ***
 ****
*****
*/

console.log('Inverted Mirrored Right Triangle Star Pattern.')
for (let i = 5; i > 0; i--) {
    let result = ''
    for (let j = 0; j < n - i; j++) {
        result += ' '
    }
    for (let k = 0; k < i; k++) {
        result += '*'
    }
    console.log(result)
}
/*
*****
 ****
  ***
   **
    *
*/

console.log('Square');
for (let i = 0; i < 5; i++) {
    let result = ''
    for (let j = 0; j < 5; j++) {
        result += '*'
    }
    console.log(result)
}
/*
*****
*****
*****
*****
*****
*/
console.log('Half Diamond Star Pattern.')
for (let i = 0; i < n; i++) {
    let result = ''
    for (let j = 0; j < i; j++) {
        result += '*'
    }
    console.log(result)
}
for (let i = 0; i < n; i++) {
    let result = ''
    for (let j = 0; j < n - i; j++) {
        result += '*'
    }
    for (let k = 0; k < i; k++) {
        result += ' '
    }
    console.log(result)
}

/*
*
**
***
****
*****
****
***
**
*
*/

console.log('Solid Inverted Half Diamond Star Pattern.')
for (let i = 0; i < n; i++) {
    let result = ''
    for (let j = 0; j < n - i - 1; j++) {
        result += ' '
    }
    for (let k = 0; k <= i; k++) {
        result += '*'
    }
    console.log(result)
}

for (let i = n; i >= 0; i--) {
    let result = ''
    for (let j = 0; j < n - i; j++) {
        result += ' '
    }
    for (let k = 0; k < i; k++) {
        result += '*'
    }
    console.log(result)
}

/*
    *
   **
  ***
 ****
*****
*****
 ****
  ***
   **
    *
*/

console.log('K Double Pyramid Star Pattern.')

for (let i = 0; i < n; i++) {
    let result = ''
    for (let j = 0; j < n - i; j++) {
        result += '*'
    }
    for (let k = 0; k < i; k++) {
        result += ' '
    }
    console.log(result)
}
for (let i = 0; i <= n; i++) {
    let result = ''
    for (let j = 0; j < i; j++) {
        result += '*'
    }
    for (let k = 0; k < n - i; k++) {
        result += ' '
    }
    console.log(result)
}
/*
*****
****
***
**
*
*
**
***
****
*****
*/
console.log('Triangle')
for (let i = 0; i < n; i++) {
    let result = ''
    for (let j = n; j > i; j--) {
        result += " "
    }
    for (let k = 0; k < i * 2 - 1; k++) {
        result += "*"
    }
    console.log(result)
}

