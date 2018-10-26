// function to get the value of the search parameter of my park feature when the search button is clicked
parkButton.addEventListener("click", () => {
// targets the value in my dropdown options
  let clickValue = parkSection.options[parkSection.selectedIndex].value
  console.log(clickValue)
  parkFetch(clickValue)
})

function parkFetch(clickValue) {
  fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=vx0odMXRoly9l5yCnqWKCJykT&${clickValue}`, {
  headers: {
    "Content-Type": "application/json",
    "user-key": "vx0odMXRoly9l5yCnqWKCJykT"
  }
})
  .then(parks => parks.json())
  .then(parksData => {
    parksData.forEach((park) => {
      let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
      itineraryDiv.appendChild(parkName)
    })
  })

}