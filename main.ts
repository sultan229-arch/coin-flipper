let coin = 0
input.onGesture(Gesture.Shake, function () {
    coin = randint(1, 2)
    if (coin == 1) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
