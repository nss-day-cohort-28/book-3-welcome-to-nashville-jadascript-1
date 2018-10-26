

// Target Elements

// Itinerary
let itineraryDiv = document.querySelector(".itinerary")
// Results Table
let resultsDiv = document.querySelector(".searchResultTable")


// Fetch functions that call our DOM function that creates the HTML element

// Insert park name, address, and year established into the itinerary Div
// fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=vx0odMXRoly9l5yCnqWKCJykT")
//   .then(parks => parks.json())
//   .then(parksData => {
//     parksData.forEach((park) => {
//       let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
//       itineraryDiv.appendChild(parkName)
//     })
//   })

  //Insert park name, address, and year established into the Results Div
  // fetch("http://localhost:8088/parks")
  // .then(parks => parks.json())
  // .then(parksData => {
  //   parksData.forEach((park) => {
  //     let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
  //     resultsDiv.appendChild(parkName)
  //   })
  // })
