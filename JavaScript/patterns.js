const n = 5

for (let i = 1; i <= n; i++) {
    let result = ''
    for (let j = 1; j <= n; j++) {
        result += '*'
    }
    console.log(result)
}

console.log('right triangle star pattern.')
for (let i = 1; i <= n; i++) {
    let result = ''
    for (let j = 1; j <= i; j++) {
        result += '*'
    }
    console.log(result)
}

console.log('inverted right triangle star pattern.')
for (let i = 5; i >= 1; i--) {
    let result = ''
    for (let j = 0; j < i; j++) {
        result += '*'
    }
    console.log(result)
}


console.log('mirrored right triangle star')
for (let i = 1; i <= n; i++) {
    let result = ''
    for (let j = 1; j <= n - i; j++) {
        result += ' '
    }
    for (let k = 1; k <= i; k++) {
        result += '*'
    }
    console.log(result)
}

console.log('Inverted Half Pyramid Star pattern')
for (let i = 5; i >= 1; i--) {
    let result = ''
    for (let j = 5; j > i; j--) {
        result += ' '
    }
    for (let k = 1; k <= i; k++) {
        result += '*'
    }
    console.log(result)
}


console.log('Pyramid')

for (let i = 0; i <= n; i++) {
    let result = ''
    for (let j = 0; j < n - i; j++) {
        result += ' '
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        result += '*';
    }
    console.log(result)
}

console.log('Inverted Pyramid')

for (let i = n; i >= 1; i--) {
    let result = ''
    for (let j = 1; j <= n - i; j++) {
        result += ' '
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
        result += '*';
    }

    console.log(result)
}
