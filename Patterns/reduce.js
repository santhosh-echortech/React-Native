let a = [10, 2, 3, 4, 5].reduce((total, currentValue) => {
    console.log(total,'total',currentValue,'currentValue')
    return total + currentValue
},0)

console.log(a)