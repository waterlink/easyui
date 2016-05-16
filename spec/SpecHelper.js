EasyUI.Test = {}

beforeEach(function() {
  EasyUI.Test.container = document.getElementById("easyui_test_container")
  if (EasyUI.Test.container == null) {
    EasyUI.Test.container = document.createElement("div")
    EasyUI.Test.container.style = "display: none"
    document.body.appendChild(EasyUI.Test.container)
  }

  EasyUI.Test.container.innerHTML = ""

  EasyUI.document = new EasyUI.Test.Document
})

EasyUI.Test.Document = function() {
  this.body = new EasyUI.Test.Body
}

EasyUI.Test.Document.prototype.createElement = function(tagName) {
  return document.createElement(tagName)
}

EasyUI.Test.Body = function() {

}

EasyUI.Test.Body.prototype.appendChild = function(child) {
  EasyUI.Test.container.appendChild(child)
}
