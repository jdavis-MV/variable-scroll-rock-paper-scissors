input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    a += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    t += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    b += 1
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("A")
    basic.showNumber(a)
    basic.showString("b")
    basic.showNumber(b)
    basic.showString("t")
    basic.showNumber(t)
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
let t = 0
let b = 0
let a = 0
a = 0
b = 0
t = 0
