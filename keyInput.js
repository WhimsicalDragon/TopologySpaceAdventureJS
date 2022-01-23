import{moveDown,moveUp,moveRight,moveLeft,fixBackground} from './setBackground.js'

document.getElementById("backMain").style.left = 250 + "px"
document.getElementById("backMain").style.top = 250 + "px"

fixBackground()


var upInt
var downInt
var leftInt
var downInt
var keyMap = new Map()

keyMap.set("Down", true)

document.addEventListener('keydown', function(event) {

    switch(event.key) {
        case "ArrowDown":
            break
        case "ArrowUp":
            if(keyMap.get("Down") == false) {            

                keyMap.set("Down", true)
                setInterval(() => {moveUp();},50)
            } else {
                break
            }
        case "ArrowLeft":
            break
        case "ArrowRight":
                break   
    }

});

document.addEventListener('keyup', function(event) {
    switch(event.key) {
        case "ArrowDown":
            break
        case "ArrowUp":
            setInterval(() => {moveUp();},50)
            break
        case "ArrowLeft":
            break
        case "ArrowRight":
                break   
    }
});

