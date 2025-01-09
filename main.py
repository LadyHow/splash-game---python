from arcade import *

# Configurar el color de fondo
scene.set_background_color(9)

# Crear el sprite del jugador
my_sprite = sprites.create(img("""
    . . . . . . . . . . . .
    . . . . . . . . . . . .
    . . . . 5 5 5 5 . . . .
    . . . 5 5 5 5 5 5 . . .
    . . . 5 5 5 5 5 5 . . .
    . . . . 5 5 5 5 . . . .
    . . . . . . . . . . . .
    . . . . . . . . . . . .
    . . . . . . . . . . . .
"""), SpriteKind.player)

# Configurar los controles para mover el jugador
controller.move_sprite(my_sprite)

# Crear un sprite de comida
food = sprites.create(img("""
    . . . . . 6 6 6 . . . .
    . . . 6 6 6 6 6 6 . . .
    . . 6 6 6 6 6 6 6 . . .
    . . 6 6 6 6 6 6 6 . . .
    . . 6 6 6 6 6 6 6 . . .
    . . . 6 6 6 6 6 6 . . .
    . . . . . 6 6 6 . . . .
"""), SpriteKind.food)

# Colocar la comida en una posición aleatoria
food.set_position(randint(10, 150), randint(10, 110))

# Crear puntuación inicial
info.set_score(0)

# Detectar colisiones entre el jugador y la comida
def on_overlap(player, food):
    info.change_score_by(1)  # Incrementa la puntuación
    food.set_position(randint(10, 150), randint(10, 110))  # Reubicar comida

sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_overlap)

