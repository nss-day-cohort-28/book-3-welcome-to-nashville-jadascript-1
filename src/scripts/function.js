// element creator
function elementFactory(el, content, clazz, ID, ...children) {
  let element = document.createElement(el);
  element.innerHTML = content || null;
  element.classList.add(clazz || null)
  element.setAttribute("id", ID || null)
  children.forEach(child => {
    element.appendChild(child)
  })
  return element
}
