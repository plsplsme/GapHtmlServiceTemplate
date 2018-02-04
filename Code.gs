function doGet() {
  var t = HtmlService.createTemplateFromFile('index')
  return t.evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
