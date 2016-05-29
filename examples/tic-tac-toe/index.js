var currentPlayer = "X"
var nextPlayer = "O"

var uiCurrentPlayer = new EasyUI.Rectangle({
  left: 98, top: 5,
  width: 200, height: 20,
  text: "Current player: X"
})

function clickHandler(target) {
  target.setText(currentPlayer)

  var t = currentPlayer
  currentPlayer = nextPlayer
  nextPlayer = t

  uiCurrentPlayer.setText("Current player: " + currentPlayer)
}

for (var i = 0; i < 3; ++i) {
  for (var j = 0; j < 3; ++j) {
    new EasyUI.Rectangle({
      left: 30 * i, top: 30 * j, width: 30, height: 30,
      text: "",
      onclick: clickHandler,
    })
  }
}
