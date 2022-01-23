import{moveDown,moveUp,moveRight,moveLeft,fixBackground} from './setBackground.js'

document.getElementById("backMain").style.left = 250 + "px"
document.getElementById("backMain").style.top = 250 + "px"

fixBackground()

/*
var upInt
var downInt
var leftInt
var rightInt
var keyMap = new Map()

keyMap.set("Down", false)
keyMap.set("Up", false)
keyMap.set("Left", false)
keyMap.set("Right", false)
keyMap.set("downInt",false)
keyMap.set("upInt",false)
keyMap.set("leftInt",false)
keyMap.set("rightInt",false)

console.log(keyMap.get("rightInt"))

document.addEventListener('keydown', function(event) {

    switch(event.key) {
        case "ArrowDown":

            keyMap.set("Up", false)
            keyMap.set("upInt",false)
            clearInterval(upInt)

            if(keyMap.get("Left",false)) {
                keyMap.set("leftIn",false)
                clearInterval(leftInt)
            }

            if(keyMap.get("Right",false)) {
                keyMap.set("rightIn",false)
                clearInterval(rightInt)
            }

            if(keyMap.get("Down") == false && keyMap.get("downInt",false) == false) {            

                keyMap.set("Down", true)
                keyMap.set("downInt",true)
                downInt = setInterval(() => {moveDown();},50)
            } else {
                break
            }
            break

        case "ArrowUp":
            keyMap.set("Down", false)
            keyMap.set("downInt",false)

            clearInterval(downInt)

            if(keyMap.get("Left",false)) {
                keyMap.set("leftIn",false)
                clearInterval(leftInt)
            }

            if(keyMap.get("Right",false)) {
                keyMap.set("rightIn",false)
                clearInterval(rightInt)
            }


            if(keyMap.get("Up") == false && keyMap.get("upInt",false)  == false) {            

                keyMap.set("Up", true)
                keyMap.set("upInt",true)
                upInt = setInterval(() => {moveUp();},50)
            } else {
                break
            }
            break

        case "ArrowLeft":
            keyMap.set("Right", false)
            keyMap.set("rightInt",false)
            clearInterval(rightInt)

            if(keyMap.get("Up",false)) {
                keyMap.set("upIn",false)
                clearInterval(upInt)
            }

            if(keyMap.get("Down",false)) {
                keyMap.set("downIn",false)
                clearInterval(downInt)
            }

            if(keyMap.get("Left") == false && keyMap.get("leftInt",false)  == false) {            

                keyMap.set("Left", true)
                keyMap.set("leftInt",true)
                leftInt = setInterval(() => {moveLeft();},50)
            } else {
                break
            }
            break
        case "ArrowRight":
            keyMap.set("Left", false)
            keyMap.set("leftInt",false)
            clearInterval(leftInt)

            if(keyMap.get("Up",false)) {
                keyMap.set("upIn",false)
                clearInterval(upInt)
            }

            if(keyMap.get("Down",false)) {
                keyMap.set("downIn",false)
                clearInterval(downInt)
            }

            if(keyMap.get("Right") == false && keyMap.get("rightInt",false)  == false) {            

                keyMap.set("Right", true)
                keyMap.set("rightInt",true)
                rightInt = setInterval(() => {moveRight();},50)
            } else {
                break
            }
            break   
    }

});


document.addEventListener('keyup', function(event) {
    switch(event.key) {
        case "ArrowDown":
            if(keyMap.get("rightInt") && keyMap.get("Right") || keyMap.get("leftInt") && keyMap.get("Left")) {
                keyMap.set("downInt",false)
                keyMap.set("Down",false)
                clearInterval(downInt)
            } else {
                keyMap.set("Down",false)
            }

            break
        case "ArrowUp":
            if(keyMap.get("rightInt") && keyMap.get("Right") || keyMap.get("leftInt") && keyMap.get("Left")) {
                keyMap.set("upInt",false)
                keyMap.set("Up",false)
                clearInterval(upInt)
            } else {
               keyMap.set("Up",false)
            }
            break
        case "ArrowLeft":
            if(keyMap.get("upInt") && keyMap.get("Up") || keyMap.get("downInt") && keyMap.get("Down")) {
                keyMap.set("leftInt",false)
                keyMap.set("Left",false)
                clearInterval(leftInt)
            } else {
                keyMap.set("Left",false)
            }
            break
        case "ArrowRight":
            if(keyMap.get("upInt") && keyMap.get("Up") || keyMap.get("downInt") && keyMap.get("Down")) {
                keyMap.set("rightInt",false)
                keyMap.set("Right",false)
                clearInterval(rightInt)
            } else {
                keyMap.set("Right",false)
            }
                break   
    }
});
*/
