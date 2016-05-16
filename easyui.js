var EasyUI = EasyUI || {}

EasyUI.document = document

EasyUI.styleAttribute = function(props) {
  for (var index = 0; index < props.length; ++index) {
    props[index] = props[index].join(": ")
  }

  return props.join("; ")
}

EasyUI.Rectangle = function(options) {
  var that = this

  this.left = options.left
  this.top = options.top
  this.width = options.width
  this.height = options.height
  this.onclick = options.onclick

  this.element = EasyUI.document.createElement("div")
  this.textElement = EasyUI.document.createElement("div")

  EasyUI.document.body.appendChild(this.element)
  this.element.appendChild(this.textElement)

  this.element.style = EasyUI.styleAttribute(this.styleProps())
  this.element.onclick = function(event) {
    return that.onclick(that)
  }

  this.textElement.style = EasyUI.styleAttribute(this.textStyleProps())
  this.setText(options.text)
}

EasyUI.Rectangle.prototype.setText = function(text) {
  this.text = text
  this.textElement.innerHTML = text
}

EasyUI.Rectangle.prototype.styleProps = function() {
  return [
    ["left", this.left + "px"],
    ["top", this.top + "px"],
    ["width", this.width + "px"],
    ["height", this.height + "px"],
    ["border", "1px solid"],
    ["position", "absolute"],
    ["display", "table"],
  ]
}

EasyUI.Rectangle.prototype.textStyleProps = function() {
  return [
    ["text-align", "center"],
    ["vertical-align", "middle"],
    ["display", "table-cell"],
  ]
}
