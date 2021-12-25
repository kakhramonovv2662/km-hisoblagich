var elForm = document.querySelector('.contant__form')
var elInput = elForm.querySelector('.contant__input')
var elButton = elForm.querySelector('.contant__button')

var elTextWalk = document.querySelector('.walk')
var elTextBicy = document.querySelector('.bicycle')
var elTextCar = document.querySelector('.car')
var elTextPlane = document.querySelector('.plane')

var walk = 3.6
var bicycle = 20.1
var car = 70
var plane = 800
var currencyValue

elForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var result = Number(elInput.value) / Number(walk)
    var results = Number(elInput.value) / Number(bicycle)
    var resulta = Number(elInput.value) / Number(car)
    var resultes = Number(elInput.value) / Number(plane)

    elTextWalk.innerHTML = result.toFixed(3)
    elTextBicy.innerHTML = results.toFixed(3)
    elTextCar.innerHTML = resulta.toFixed(3)
    elTextPlane.innerHTML = resultes.toFixed(3)
})
