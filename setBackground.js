var xPos
var yPos



function moveLeft() {
    xPos = parseInt(document.getElementById("backMain").style.left)

    if(xPos + 10 > 500) {
        xPos = xPos - 500
    }

    document.getElementById("backMain").style.left = 10 + xPos + "px"

    fixBackground()
}

function moveRight() {
    var xPos = parseInt(document.getElementById("backMain").style.left)

    if(xPos - 10 < 0) {
        xPos = xPos + 500
    }

    document.getElementById("backMain").style.left = xPos - 10 + "px"
    fixBackground()
}

function moveDown() {
    yPos = parseInt(document.getElementById("backMain").style.top)

    if(yPos - 10 < 0) {
        yPos = yPos + 500
    }

    document.getElementById("backMain").style.top = yPos - 10 + "px"
    fixBackground()
}

function moveUp() {
    yPos = parseInt(document.getElementById("backMain").style.top)

    if(yPos + 10 > 500) {
        yPos = yPos - 500
    }

    document.getElementById("backMain").style.top = yPos + 10 + "px"
    fixBackground()
}


//These help avoid jitter, but I'll do them later
function moveDownRight() {

    yPos = parseInt(document.getElementById("backMain").style.top)

    if(yPos - 10 < 0) {
        yPos = yPos + 500
    }

    document.getElementById("backMain").style.top = yPos - 10 + "px"

    if(xPos - 10 < 0) {
        xPos = xPos + 500
    }

    document.getElementById("backMain").style.left = xPos - 10 + "px"

    fixBackground()
}

function fixBackground() {
    var xPos
    var yPos

    xPos = parseInt(document.getElementById("backMain").style.left)
    yPos = parseInt(document.getElementById("backMain").style.top)

    var xNeg = false
    var yNeg = false

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
        document.getElementById("back3").style.left = xPos + "px"
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

    fixEnemy()
    fixPortal()
}


function fixEnemy() {
    document.getElementById("enemy").style.left = parseInt(document.getElementById("backMain").style.left) + 10 + "px"
    document.getElementById("enemy").style.top = parseInt(document.getElementById("backMain").style.top) + 10 + "px"
}

function fixPortal() {
    document.getElementById("portal").style.left = parseInt(document.getElementById("backMain").style.left) + 100 + "px"
    document.getElementById("portal").style.top = parseInt(document.getElementById("backMain").style.top) + 50 + "px"
}


fixBackground()
//setInterval(() => {moveDownRight();},50)
export{moveDown,moveUp,moveRight,moveLeft,fixBackground,xPos,yPos}