// function that will create a certain element 

// function elementFactory(el, content, ...children) {

// creates any element you pass through el
//   let element = document.createElement(el);
 
// allows any content to be passed to the element through content or nothing (null)
//   element.innerHTML = content || null

// appends the children (passed through with children) to the element
//   children.forEach(child => {
//     element.appendChild(child)
//   })

// returns the element
//   return element
// }

function elementFactory(el, content, ...children) {
  let element = document.createElement(el);
  element.innerHTML = content || null
  children.forEach(child => {
    element.appendChild(child)
  })
  return element
}

