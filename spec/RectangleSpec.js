describe("EasyUI.Rectangle", function() {
  var rectangle
  var rectangleElement, textElement
  var onclickHandler = function() {}

  beforeEach(function() {
    rectangle = new EasyUI.Rectangle({
      left: 30, top: 40, width: 200, height: 300,
      text: "hello world",
      onclick: function(target) { return onclickHandler(target) },
    })

    rectangleElement = EasyUI.Test.container.getElementsByTagName("div")[0]
    textElement = rectangleElement.getElementsByTagName("div")[0]
  })

  it("has correct css style", function() {
    expect(rectangleElement.style.cssText).toEqual(
      "left: 30px; top: 40px; width: 200px; height: 300px; border: 1px solid; position: absolute; display: table;"
    )
  })

  it("has correct text", function() {
    expect(rectangleElement.textContent).toEqual("hello world")
  })

  it("has correct text css style", function() {
    expect(textElement.style.cssText).toEqual(
      "text-align: center; vertical-align: middle; display: table-cell;"
    )
  })

  it("handles click event correctly", function() {
    var handlerHasBeenCalledWith = null
    onclickHandler = function(target) { handlerHasBeenCalledWith = target }

    rectangleElement.click()
    expect(handlerHasBeenCalledWith).toEqual(rectangle)
  })
})
