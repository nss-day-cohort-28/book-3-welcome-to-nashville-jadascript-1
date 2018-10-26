// stores dropdown search value in a variable
const playgrounds = "playground=Yes"
const picnicShelters = "picnic_shelters=Yes"
const walkJogPaths = "walk_jog_paths=Yes"
const hikingTrails = "hiking_trails=Yes"
const dogPark = "dog_park=Yes"
const baseballFields = "baseball_fields=Yes"
const basketballCourts = "basketball_courts=Yes"

let parkSection = document.getElementById("parkOptions")
let parkButton = document.getElementById("parkButton")

fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=vx0odMXRoly9l5yCnqWKCJykT&playground=Yes")
  .then(parks => parks.json())
  .then(parksData => {
    parksData.forEach((park) => {
      let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
      resultsDiv.appendChild(parkName)
    })
  })


fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=vx0odMXRoly9l5yCnqWKCJykT&picnic_shelters=Yes")
  .then(parks => parks.json())
  .then(parksData => {
    parksData.forEach((park) => {
      let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
      resultsDiv.appendChild(parkName)
    })
  })


fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=vx0odMXRoly9l5yCnqWKCJykT&walk_jog_paths=Yes")
  .then(parks => parks.json())
  .then(parksData => {
    parksData.forEach((park) => {
      let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
      resultsDiv.appendChild(parkName)
    })
  })


fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=vx0odMXRoly9l5yCnqWKCJykT&hiking_trails=Yes")
  .then(parks => parks.json())
  .then(parksData => {
    parksData.forEach((park) => {
      let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
      resultsDiv.appendChild(parkName)
    })
  })


fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=vx0odMXRoly9l5yCnqWKCJykT&dog_park=Yes")
  .then(parks => parks.json())
  .then(parksData => {
    parksData.forEach((park) => {
      let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
      resultsDiv.appendChild(parkName)
    })
  })


  fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=vx0odMXRoly9l5yCnqWKCJykT&baseball_fields=Yes")
  .then(parks => parks.json())
  .then(parksData => {
    parksData.forEach((park) => {
      let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
      resultsDiv.appendChild(parkName)
    })
  })


  fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=vx0odMXRoly9l5yCnqWKCJykT&basketball_courts=Yes")
  .then(parks => parks.json())
  .then(parksData => {
    parksData.forEach((park) => {
      let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
      resultsDiv.appendChild(parkName)
    })
  })

  



