//  Configurar el color de fondo
scene.setBackgroundColor(9)
//  Crear el sprite del jugador
let my_sprite = sprites.create(img`
    . . . . . . . . . . . .
    . . . . . . . . . . . .
    . . . . 5 5 5 5 . . . .
    . . . 5 5 5 5 5 5 . . .
    . . . 5 5 5 5 5 5 . . .
    . . . . 5 5 5 5 . . . .
    . . . . . . . . . . . .
    . . . . . . . . . . . .
    . . . . . . . . . . . .
`, SpriteKind.Player)
//  Configurar los controles para mover el jugador
controller.moveSprite(my_sprite)
//  Crear un sprite de comida
let food = sprites.create(img`
    . . . . . 6 6 6 . . . .
    . . . 6 6 6 6 6 6 . . .
    . . 6 6 6 6 6 6 6 . . .
    . . 6 6 6 6 6 6 6 . . .
    . . 6 6 6 6 6 6 6 . . .
    . . . 6 6 6 6 6 6 . . .
    . . . . . 6 6 6 . . . .
`, SpriteKind.Food)
//  Colocar la comida en una posición aleatoria
food.setPosition(randint(10, 150), randint(10, 110))
//  Crear puntuación inicial
info.setScore(0)
//  Detectar colisiones entre el jugador y la comida
//  Reubicar comida
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_overlap(player: Sprite, food: Sprite) {
    info.changeScoreBy(1)
    //  Incrementa la puntuación
    food.setPosition(randint(10, 150), randint(10, 110))
})
