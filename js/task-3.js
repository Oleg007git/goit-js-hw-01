function getElementWidth(content, padding, border) {
  content = parseFloat(content);
  padding = parseFloat(padding);
  border = parseFloat(border);
  return content + padding * 2 + border * 2;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
