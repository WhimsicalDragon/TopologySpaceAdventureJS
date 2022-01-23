const canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

canvas.width = innerWidth
canvas.height = innerHeight

const ship = document.body.children.item(2);

/* Key maps */
var down = false;
var up = false;
var left = false;
var right = false;

function animate() {
    requestAnimationFrame(animate)
    console.log(ship)
    console.log(up, down, left, right)
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

animate()

addEventListener('keydown', function (event) {
    event.preventDefault();
    console.log(event.key);
    if (event.key === "ArrowDown" || event.key === "s") {
        down = true;
    }
    if (event.key === "ArrowUp" || event.key === "w") {
        up = true;
    }
    if (event.key === "ArrowLeft" || event.key === "a") {
        left = true;
    }
    if (event.key === "ArrowRight" || event.key === "d") {
        right = true;
    }
    if (event.key === " ") {
        console.log('space')
    }
});

/*Listening for if one of the keys is released*/
addEventListener('keyup', function (event) {
    event.preventDefault();
    console.log(event.key);
    if (event.key === "ArrowDown" || event.key == "s") {
        down = false;
    }
    if (event.key === "ArrowUp" || event.key == "w") {
        up = false;
    }
    if (event.key === "ArrowLeft" || event.key == "a") {
        left = false;
    }
    if (event.key === "ArrowRight" || event.key == "d") {
        right = false;
    }
    console.log(up, down, left, right)
});
