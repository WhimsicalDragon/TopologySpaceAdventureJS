import{moveDown,moveUp,moveRight,moveLeft,fixBackground} from './setBackground.js'


document.getElementById("backMain").style.left = "250px"
document.getElementById("backMain").style.top = "250px"
//document.getElementById("enemy").style.left= "275px"
//document.getElementById("enemy").style.top = "275px"


fixBackground()

var ship = document.getElementById("ship");
var n

/* Key maps */
var down = false;
var up = false;
var left = false;
var right = false;

var dInt = false
var uInt = false
var lInt = false
var rInt = false

fixBackground()


function animate() {

    if (up && right) {
        clearInterval(dInt)
        clearInterval(lInt)

        dInt = false
        lInt = false

        n = ship.classList.length
        for (let i = 0; i < n; i++) {
            ship.classList.remove(ship.classList[i])
        }
        ship.classList.add('up-right')

        if(uInt == false) {
            uInt = setInterval(() => {moveUp();},50)
        }

        if(rInt == false) {
            rInt = setInterval(() => {moveRight();},50)
        }

        
    } else if (up && left) {
        clearInterval(rInt)
        clearInterval(dInt)

        dInt = false
        rInt = false

        n = ship.classList.length
        for (let i = 0; i < n; i++) {
            ship.classList.remove(ship.classList[i])
        }
        ship.classList.add('up-left')
      

        if(uInt == false) {
            uInt = setInterval(() => {moveUp();},50)
        }

        if(lInt == false) {
            lInt = setInterval(() => {moveLeft();},50)
        }


    } else if (down && right) {
        clearInterval(uInt)
        clearInterval(lInt)

        uInt = false
        lInt = false

        n = ship.classList.length
        for (let i = 0; i < n; i++) {
            ship.classList.remove(ship.classList[i])
        }
        ship.classList.add('down-right')

        if(dInt == false) {
            dInt = setInterval(() => {moveDown();},50)
        }

        if(rInt == false) {
            rInt = setInterval(() => {moveRight();},50)
        }


    } else if (down && left) {
        clearInterval(uInt)
        clearInterval(rInt)

        uInt = false
        rInt = false

        n = ship.classList.length
        for (let i = 0; i < n; i++) {
            ship.classList.remove(ship.classList[i])
        }
        ship.classList.add('down-left')

        if(dInt == false) {
            dInt = setInterval(() => {moveDown();},50)
        }

        if(lInt == false) {
            lInt = setInterval(() => {moveLeft();},50)
        }



    } else if (up) {
        clearInterval(dInt)
        clearInterval(lInt)
        clearInterval(rInt)

        dInt = false
        lInt = false
        rInt = false

        n = ship.classList.length
        for (let i = 0; i < n; i++) {
            ship.classList.remove(ship.classList[i])
        }
        ship.classList.add('up')

        if(uInt == false) {
            uInt = setInterval(() => {moveUp();},50)
        }


    } else if (down) {
        clearInterval(uInt)
        clearInterval(lInt)
        clearInterval(rInt)

        uInt = false
        lInt = false
        rInt = false

        n = ship.classList.length
        for (let i = 0; i < n; i++) {
            ship.classList.remove(ship.classList[i])
        }
        ship.classList.add('down')

        if(dInt == false) {
            dInt = setInterval(() => {moveDown();},50)
        }


    } else if (right) {
        clearInterval(dInt)
        clearInterval(uInt)
        clearInterval(lInt)

        dInt = false
        uInt = false
        lInt = false

        n = ship.classList.length
        for (let i = 0; i < n; i++) {
            ship.classList.remove(ship.classList[i])
        }
        ship.classList.add('right')

        if(rInt == false) {
            rInt = setInterval(() => {moveRight();},50)
        }


    } else if (left) {
        clearInterval(dInt)
        clearInterval(uInt)
        clearInterval(rInt)

        dInt = false
        uInt = false
        rInt = false

        n = ship.classList.length
        for (let i = 0; i < n; i++) {
            ship.classList.remove(ship.classList[i])
        }
        ship.classList.add('left')

        if(lInt == false) {
            lInt = setInterval(() => {moveLeft();},50)
        }


    }
}


addEventListener('keydown', function (event) {
    event.preventDefault();

    if (event.key === "ArrowDown" || event.key === "s") {
        down = true;
        animate()
    }
    if (event.key === "ArrowUp" || event.key === "w") {
        up = true;
        animate()
    }
    if (event.key === "ArrowLeft" || event.key === "a") {
        left = true;
        animate()
    }
    if (event.key === "ArrowRight" || event.key === "d") {
        right = true;
        animate()
    }
    if (event.key === " ") {

    }

});

/*Listening for if one of the keys is released*/
addEventListener('keyup', function (event) {
    if (event.key === "ArrowDown" || event.key == "s") {
        down = false;
        animate()
    }
    if (event.key === "ArrowUp" || event.key == "w") {
        up = false;
        animate()
    }
    if (event.key === "ArrowLeft" || event.key == "a") {
        left = false;
        animate()
    }
    if (event.key === "ArrowRight" || event.key == "d") {
        right = false;
        animate()
    }
});
