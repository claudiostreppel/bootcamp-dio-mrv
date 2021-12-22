let currentNumberWrapper = document.getElementById("currentNumber")
let currentNumber = 0
let msgtxt = document.getElementById("msg")
let msgsoma = 'você somou 1'
let msgsubt = 'voce subtraiu 1'

function increment() {
    console.log(currentNumberWrapper.innerHTML)
    currentNumber += 1
    currentNumberWrapper.innerHTML = currentNumber
    msgtxt.innerHTML=msgsoma
}
function decrement() {
    console.log(currentNumberWrapper.innerHTML)
    currentNumber -= 1
    currentNumberWrapper.innerHTML = currentNumber
    msgtxt.innerHTML = msgsubt
}
