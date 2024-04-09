const canvas = document.querySelector("canvas")
console.log(canvas);
const c = canvas.getContext("2d") // getting 2d context method

// coming from the window object (do not need window in code)
canvas.width = innerWidth 
canvas.height = innerHeight

class Player {
    constructor() {
        // Player Positioning on the screen
        this.position = {
            x: 200,
            y: 200
        }

        // Player velocity when moving on screen
        this.velocity = {
            x: 0,
            y:
        }

        // Player image/appearance 
        // this.image =
        // Player sizing. Will have box collide detection
        this.width = 100
        this.height = 100
        
    }

    draw() {
        
    }
}