"""
Title: Flappy Frogo
Creator: Jackson
Description: Flappy Bird clone with a frog
"""
# Setup
info.set_life(3)
info.set_score(0)
game.splash("Flappy Frogo!" "Press A")
# TODO Creat backround
# TODO explore affects

# Create the Frogo
frogo = sprites.create(img("""
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
"""))
frogo.x = 40 
frogo.ay = 150

def on_jump():
    frogo.vy = -75
controller.A.on_event(ControllerButtonEvent.PRESSED, on_jump)

def on_update():
    y = frogo.y
    if y > scene.screen_height():
        death()
    elif y < 0:
        frogo.y = 0
game.on_update(on_update)

def death():
    info.change_life_by(-1)
    frogo.y = scene.screen_height()/2
    frogo.vy = 0
    if info.life() > 0: 
           game.splash("Press A to Restart")

# Create the trees 
def create_trees():
    tree_img = image.create(10, scene.screen_height())
    tree_img.fill(14)
    tree_img.fill_rect(0,randint(20,50), 10,randint(30,50),0)

    tree = sprites.create_projectile_from_side(tree_img, -50, 0)
    tree.y = scene.screen_height()/2
game.on_update_interval(1000, create_trees)
# Hit trees 