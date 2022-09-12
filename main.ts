let send_key = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Happy)
        basic.pause(5000)
        basic.clearScreen()
    } else if (receivedNumber == 0) {
        basic.showIcon(IconNames.Sad)
        basic.pause(5000)
        basic.clearScreen()
    } else if (receivedNumber == 2) {
        send_key = 1
        basic.showIcon(IconNames.Asleep)
        basic.pause(5000)
        send_key = 0
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(90)
    radio.sendValue("master_key", 0)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    if (send_key == 1) {
        radio.setGroup(89)
        radio.sendValue("master_key", 0)
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(500)
    }
})
