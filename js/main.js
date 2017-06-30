// DOM Manipulator file

document.addEventListener('DOMContentLoaded', init)

function init () {
  var basic_calc = calculator()
  var display = document.querySelector('.display')

  document.addEventListener('keyup', onKeyUp)

  function onKeyUp (event) {
    // console.log(event)
    if (checkKeyCode(event.keyCode)) {
      // check if we're clicking enter
      if (event.keyCode !== 13 && event.keyCode !== 8) {
        display.value += event.key
        console.log(display.value)}
      else if(event.keyCode === 8){
  display.value = display.value.substring(0, display.value.length - 1)
        }
      else if (display.value.includes('+')) {
        var displayValue = display.value
        calculateAdd(displayValue)
      } else if (display.value.includes('-')) {
        var displayValue = display.value
        calculateMinus(displayValue)
      } else if (display.value.includes('/')) {
        var displayValue = display.value
        calculateDivision(displayValue)
      } else if (display.value.includes('*')) {
        var displayValue = display.value
        calculateMultiplication(displayValue)
      }
    } else {
      console.log('cannot type besides number')
    }
  }

  function calculateAdd (str) {
    var splitStr = str.split('+')
    var firstNum = parseInt(splitStr[0])
    var secodNum = parseInt(splitStr[1])

    var result = basic_calc.add(firstNum, secodNum)

    displayResult(result)
  }

  function calculateMinus (str) {
    var splitStr = str.split('-')
    var firstNum = parseInt(splitStr[0])
    var secodNum = parseInt(splitStr[1])
    var result = basic_calc.minus(firstNum, secodNum)
    displayResult(result)
  }

  function calculateDivision (str) {
    var splitStr = str.split('/')
    var firstNum = parseInt(splitStr[0])
    var secodNum = parseInt(splitStr[1])
    var result = basic_calc.division(firstNum, secodNum)
    displayResult(result)
  }

  function calculateMultiplication (str) {
    var splitStr = str.split('*')
    var firstNum = parseInt(splitStr[0])
    var secodNum = parseInt(splitStr[1])
    var result = basic_calc.multiplication(firstNum, secodNum)
    displayResult(result)
  }

  function displayResult (str) {
    display.value = str
  }

  // if the key event is 1 - 0
  // extend this to '+' symbol
  // extend this to 'enter' key
  function checkKeyCode (keycode) {
    if (keycode >= 48 && keycode <= 57) {
      return true
    }

    if (keycode === 187 || keycode === 13 || keycode === 189 || keycode === 191 || keycode === 8){
      return true
    }

    return false
  }
}
