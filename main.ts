input.onGesture(Gesture.ScreenDown, function () {
    let t = 0
    let b = 0
    let a = 0
    if (a > b && a > t) {
        basic.showString("A")
    } else {
        if (b > a && b > t) {
            basic.showString("B")
        }
        if (t > a && t > b) {
            while (true) {
                basic.showLeds(`
                    # # # # #
                    . . # . .
                    . . # . .
                    . . # . .
                    . . # . .
                    `)
                basic.showLeds(`
                    # # # # .
                    . # . . .
                    . # . . .
                    . # . . .
                    . # . . .
                    `)
                basic.showLeds(`
                    # # # . .
                    # . . . .
                    # . . . .
                    # . . . .
                    # . . . .
                    `)
                basic.showLeds(`
                    # # . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    # . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . # #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . # # #
                    . . . . #
                    . . . . #
                    . . . . #
                    . . . . #
                    `)
                basic.showLeds(`
                    . # # # #
                    . . . # .
                    . . . # .
                    . . . # .
                    . . . # .
                    `)
            }
        }
    }
})
