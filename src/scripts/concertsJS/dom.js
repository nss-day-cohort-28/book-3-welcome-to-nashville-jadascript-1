// ?creating dom elements
function elementFactory(el, content,...children) {
  let element = document.createElement(el);
  element.innerHTML = content || null
  children.forEach(child => {
    element.appendChild(child)
  })
  return element
}


