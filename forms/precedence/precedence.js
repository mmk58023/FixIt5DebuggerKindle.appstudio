// if the first number is largest, displays the sum of the two numbers      
// if second number is largest, displays product of the two numbers
// if the two numbers are equal then shows the first number squared

let n1 = parseInt(prompt("Enter first number" ))
let n2 = parseInt(prompt("Enter second number" ))

if (n1 > n2) {
  let sum = (+n1) + (+n2)
    alert(`The sum of the numbers is ${sum}.`)
    console.log(`The sum of the numbers is ${sum}.`)
} else if (n1 < n2) {
    let product = (+n1) * (+n2)
    alert(`The product of the numbers is ${product}.`)
    console.log(`The product of the numbers is ${product}.`)
} else if (n1 === n2) {
  let squared = (+n1) * (+n1)
  alert(`The product of the numbers is ${squared}.`)
  console.log(`The product of the numbers is ${squared}.`) 
} else {
    alert("Please enter a valid number.")
}



