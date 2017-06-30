
//DOM Manipulator file

document.addEventListener('DOMContentLoaded', init)

function init(){
  var basic_calc = calculator()
  var display = document.querySelector('.display')

  document.addEventListener('keyup', onKeyUp)

  function onKeyUp (event) {
    console.log(event)
    //check if we are clicking enter
    if(event.keyCode !== 13){
      display.value += ' ' + event.key
    }
    else{
      alert('add those 2 numbers!')
      var displayValue = display.value
      calculateAdd(displayValue)
    }
     else{
        console.log('cannot type besides number')
      }
    }
  }

    function calculateAdd(str){
    var splitStr = str.split('+')
    var firstNum = parseInt(splitStr[0])
    var secondNum = parseInt(splitStr[1])
    var result = basic_calc().add(firstNum, secondNum)
    displayResult(result)
    }

function displayResult(result){
  display.value = result
}


//use keycode instead of keyboard letters in targeting as keyboard languages vary

// if key event is 1- 0
//extend this to + symbol
// extend this to 'enter' key

function checkKeyCode (keycode){
  if(keycode >= 48 && keycode <= 57){
  return true
}
if(keycode===187 || keycode === 13){
  return true
}
return false
}
