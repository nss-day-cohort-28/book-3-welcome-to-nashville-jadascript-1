// function to get the value of the search parameter of my park feature when the search button is clicked

// I don't even need this now because I'm using an "onchange" feature in my index dropdown

// parkButton.addEventListener("click", () => {
// // targets the value in my dropdown options
//   let clickValue = parkSection.options[parkSection.selectedIndex].value
//   console.log(clickValue)
//   parkFetch(clickValue)
// })

function elementFactory(el, content, clazz, ID, ...children) {
  let element = document.createElement(el);
  element.innerHTML = content || null
  element.classList.add(clazz || null)
  element.setAttribute("id", ID || null)
  children.forEach(child => {
    element.appendChild(child)
  })
  return element
}



function parkFetch(clickValue) {
 return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=vx0odMXRoly9l5yCnqWKCJykT&${clickValue}`)
  .then(park => park.json())
  .then(park =>{
    document.querySelector(".searchResultTable").innerHTML = null;
    return park})
  .then(parksData => parksData.forEach((park) => {
    console.log(park)
    let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
    let saveParkButton= elementFactory("button", "save", "saveParkButton", `unique ID=${park.mapped_location_address}`)
    
    let searchParkResults= elementFactory("div", null,null, null, parkName, saveParkButton)
    resultsDiv.appendChild(searchParkResults)
  }))
}
/* <button onclick="parkFetchItin(event.target.parentNode)">Save</button> */

// function parkFetchItin(clickValue) {
//   console.log("clickValue", clickValue)
//   return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=vx0odMXRoly9l5yCnqWKCJykT&${clickValue}`)
//    .then(park => park.json())
//    .then(park =>{
//      document.querySelector(".searchResultTable").innerHTML = null;
//      return park})
//    .then(parksData => parksData.forEach((park) => {
//      console.log(park)
//      let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
//      itineraryDiv.appendChild(parkName)
//    }))
//  }
