/** 
Title: Flappy Frogo
Creator: Jackson
Description: Flappy Bird clone with a frog

 */
//  Setup
info.setLife(3)
info.setScore(0)
game.splash("Flappy Frogo!Press A")
//  TODO Creat backround
//  TODO explore affects
//  Create the Frogo
let frogo = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 7 7 7 7 7 7 . . . . .
    . . . . . 7 7 7 7 7 7 . . . . .
    . . . . . 7 7 7 7 7 7 . . . . .
    . . . . . 7 7 7 7 7 7 . . . . .
    . . . . . 7 7 7 7 7 7 . . . . .
    . . . . . 7 7 7 7 7 7 . . . . .
    . . . . . 7 7 7 7 7 7 . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`)
frogo.x = 40
frogo.ay = 150
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_jump() {
    frogo.vy = -75
})
game.onUpdate(function on_update() {
    let y = frogo.y
    if (y > scene.screenHeight()) {
        death()
    } else if (y < 0) {
        frogo.y = 0
    }
    
})
function death() {
    info.changeLifeBy(-1)
    frogo.y = scene.screenHeight() / 2
    frogo.vy = 0
    if (info.life() > 0) {
        game.splash("Press A to Restart")
    }
    
}

//  Create the trees 
game.onUpdateInterval(1000, function create_trees() {
    let tree_img = image.create(10, scene.screenHeight())
    tree_img.fill(14)
    tree_img.fillRect(0, randint(20, 50), 10, randint(30, 50), 0)
    let tree = sprites.createProjectileFromSide(tree_img, -50, 0)
    tree.y = scene.screenHeight() / 2
})
