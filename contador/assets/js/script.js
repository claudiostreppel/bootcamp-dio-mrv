let currentNumberWrapper = document.getElementById("currentNumber")
let currentNumber = 0

function increment() {
    console.log(currentNumberWrapper.innerHTML)
    currentNumber += 1
    currentNumberWrapper.innerHTML = currentNumber
}
function decrement() {
    console.log(currentNumberWrapper.innerHTML)
    currentNumber -= 1
    currentNumberWrapper.innerHTML = currentNumber
}
