import{moveDown,moveUp,moveRight,moveLeft,fixBackground} from './setBackground.js'

document.getElementById("backMain").style.left = 250 + "px"
document.getElementById("backMain").style.top = 250 + "px"

fixBackground()

setInterval(() => {moveDown();},50)

