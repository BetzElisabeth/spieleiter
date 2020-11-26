let geschwinigkeit = 0
radio.setGroup(3)
radio.sendString("spielen")
basic.forever(function () {
    geschwinigkeit += 2
    basic.showNumber(geschwinigkeit)
    if (geschwinigkeit) {
        radio.sendString("leicht")
    } else if (geschwinigkeit) {
        radio.sendString("mittel")
    } else if (geschwinigkeit) {
        radio.sendString("schwer")
        music.setTempo(geschwinigkeit)
    }
})
