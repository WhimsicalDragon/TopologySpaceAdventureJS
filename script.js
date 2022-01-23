import{moveDown,moveUp,moveRight,moveLeft,fixBackground} from './setBackground.js'


document.getElementById("backMain").style.left = "250px"
document.getElementById("backMain").style.top = "250px"

fixBackground()

var ship = document.getElementById("ship");
var n

/* Key maps */
var down = false;
var up = false;
var left = false;
var right = false;

function animate() {

    if (up && right) {
        n = ship.classList.length
        for (let i = 0; i < n; i++) {
            ship.classList.remove(ship.classList[i])
        }
        ship.classList.add('up-right')
    } else if (up && left) {
        n = ship.classList.length
        for (let i = 0; i < n; i++) {
            ship.classList.remove(ship.classList[i])
        }
        ship.classList.add('up-left')
    } else if (down && right) {
        n = ship.classList.length
        for (let i = 0; i < n; i++) {
            ship.classList.remove(ship.classList[i])
        }
        ship.classList.add('down-right')
    } else if (down && left) {
        n = ship.classList.length
        for (let i = 0; i < n; i++) {
            ship.classList.remove(ship.classList[i])
        }
        ship.classList.add('down-left')
    } else if (up) {
        n = ship.classList.length
        for (let i = 0; i < n; i++) {
            ship.classList.remove(ship.classList[i])
        }
        ship.classList.add('up')
    } else if (down) {
        n = ship.classList.length
        for (let i = 0; i < n; i++) {
            ship.classList.remove(ship.classList[i])
        }
        ship.classList.add('down')
    } else if (right) {
        n = ship.classList.length
        for (let i = 0; i < n; i++) {
            ship.classList.remove(ship.classList[i])
        }
        ship.classList.add('right')
    } else if (left) {
        n = ship.classList.length
        for (let i = 0; i < n; i++) {
            ship.classList.remove(ship.classList[i])
        }
        ship.classList.add('left')
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
