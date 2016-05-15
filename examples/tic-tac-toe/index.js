var currentPlayer = "X"
var nextPlayer = "O"

function clickHandler(target) {
  target.setText(currentPlayer)

  var t = currentPlayer
  currentPlayer = nextPlayer
  nextPlayer = t
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
