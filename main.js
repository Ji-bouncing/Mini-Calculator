let total = 0

document.querySelector('#zero').addEventListener('click',makeZero)
document.querySelector('#plusTwo').addEventListener('click',addTwo)
document.querySelector('#plusFive').addEventListener('click',addFive)
document.querySelector('#minusTwo').addEventListener('click',subtractTwo)
document.querySelector('#minusOne').addEventListener('click',subtractOne)
document.querySelector('#dividedByTwo').addEventListener('click',divideByTwo)
document.querySelector('#timesTwo').addEventListener('click',multiplyByTwo)
document.querySelector('#timesThree').addEventListener('click',multiplyByThree)
document.querySelector('#dividedByThree').addEventListener('click',divideByThree)
document.querySelector('#minusFive').addEventListener('click',subtractFive)

function makeZero(){
  total = 0
  document.querySelector('#putResult').innerHTML = total
}
function addTwo(){
    total = total + 2
    document.querySelector('#putResult').innerHTML = total
}
function addFive(){
    total = total + 5
    document.querySelector('#putResult').innerHTML = total
}
function subtractTwo(){
    total = total - 2
    document.querySelector('#putResult').innerHTML = total
}
function subtractOne(){
    total = total - 1
    document.querySelector('#putResult').innerHTML = total
}
function divideByTwo(){
    total = total / 2
    document.querySelector('#putResult').innerHTML = total
}
function multiplyByTwo(){
    total = total * 2
    document.querySelector('#putResult').innerHTML = total
}
function multiplyByThree(){
    total = total * 3
    document.querySelector('#putResult').innerHTML = total
}
function divideByThree(){
    total =  total / 3
    document.querySelector('#putResult').innerHTML = total
}
function subtractFive(){
    total = total - 5
    document.querySelector('#putResult').innerHTML = total
}