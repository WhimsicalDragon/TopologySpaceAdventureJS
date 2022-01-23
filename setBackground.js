
//BackMain center
//Back2
//Back3
//Back4

//
//<img src="images/DevBackground.png" id="back4" class="center">

//Do not go over 375!!
document.getElementById("backMain").style.left = 375
document.getElementById("backMain").style.top = 375

function fixBackground() {
    xPos = parseInt(document.getElementById("backMain").style.left)
    yPos = parseInt(document.getElementById("backMain").style.top)

    xNeg = false
    yNeg = false

    if (xPos < 250) {
        xNeg = true
        document.getElementById("back2").style.left = 250 + xPos + "px"
        document.getElementById("back2").style.top = yPos + "px"
    } else {
        document.getElementById("back2").style.left = xPos - 250 + "px"
        document.getElementById("back2").style.top = yPos + "px"
    }


    if (yPos < 250) {
        yNeg = true
        document.getElementById("back3").style.left = xPos + "px"
        document.getElementById("back3").style.top = 250 + yPos + "px"
    } else {
        document.getElementById("back3").style.left = xPos
        document.getElementById("back3").style.top = yPos - 250 + "px"
    }


    if (xNeg && yNeg) {//Both
        document.getElementById("back4").style.left = 250 + xPos + "px"
        document.getElementById("back4").style.top = 250 + yPos + "px"
    } else if (!xNeg && yNeg) {//Just y
        document.getElementById("back4").style.left = xPos - 250 + "px"
        document.getElementById("back4").style.top = 250 + yPos + "px"

    } else if (xNeg && !yNeg) {//Just x
        document.getElementById("back4").style.left = 250 + xPos + "px"
        document.getElementById("back4").style.top = yPos - 250 + "px"

    } else { // Neither
        document.getElementById("back4").style.left = xPos - 250 + "px"
        document.getElementById("back4").style.top = yPos - 250 + "px"

    }

    console.log(yPos)
}

fixBackground()