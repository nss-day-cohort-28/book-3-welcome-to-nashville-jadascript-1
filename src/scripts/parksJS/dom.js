// Function to fetch the data (based on user selection in the dropdown) and insert it into the resultsDiv in the DOM. Also refactored this to include a save button element beside each of the results.
function parkFetch(clickValue) {
  return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=vx0odMXRoly9l5yCnqWKCJykT&${clickValue}&$limit=6`)
   .then(park => park.json())
   .then(park =>{
     document.querySelector(".searchResultTable").innerHTML = `<h3>Here are your results</h3>`;
     return park})
   .then(parksData => {parksData.forEach((park) => {
     console.log(park)
     let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
     let saveParkButton= elementFactory("button", "Add To Itinerary", "saveParkButton", `saveParkButton-${park.mapped_location.coordinates[1]}`)
     
     let searchParkResults= elementFactory("div", null,null, `searchParkResults-${park.mapped_location.coordinates[1]}`, parkName, saveParkButton)
     resultsDiv.appendChild(searchParkResults)
     
   })
   parkEventListener();})
 }
 
 /* <button onclick="parkFetchItin(event.target.parentNode)">Save</button> */
 
// Same as the above function except it inserts the data into the ItineraryDiv in the DOM
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