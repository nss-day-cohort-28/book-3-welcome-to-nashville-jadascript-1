let playgrounds = "playground=Yes"

fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=vx0odMXRoly9l5yCnqWKCJykT&playground=Yes")
  .then(parks => parks.json())
  .then(parksData => {
    parksData.forEach((park) => {
      let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
      resultsDiv.appendChild(parkName)
    })
  })

let picnicShelters = "picnic_shelters=Yes"

fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=vx0odMXRoly9l5yCnqWKCJykT&picnic_shelters=Yes")
  .then(parks => parks.json())
  .then(parksData => {
    parksData.forEach((park) => {
      let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
      resultsDiv.appendChild(parkName)
    })
  })

let walkJogPaths = "walk_jog_paths=Yes"

fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=vx0odMXRoly9l5yCnqWKCJykT&walk_jog_paths=Yes")
  .then(parks => parks.json())
  .then(parksData => {
    parksData.forEach((park) => {
      let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
      resultsDiv.appendChild(parkName)
    })
  })

let hikingTrails = "hiking_trails=Yes"

fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=vx0odMXRoly9l5yCnqWKCJykT&hiking_trails=Yes")
  .then(parks => parks.json())
  .then(parksData => {
    parksData.forEach((park) => {
      let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
      resultsDiv.appendChild(parkName)
    })
  })

let dogPark = "dog_park=Yes"

fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=vx0odMXRoly9l5yCnqWKCJykT&dog_park=Yes")
  .then(parks => parks.json())
  .then(parksData => {
    parksData.forEach((park) => {
      let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
      resultsDiv.appendChild(parkName)
    })
  })

  let baseballFields = "baseball_fields=Yes"

  fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=vx0odMXRoly9l5yCnqWKCJykT&baseball_fields=Yes")
  .then(parks => parks.json())
  .then(parksData => {
    parksData.forEach((park) => {
      let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
      resultsDiv.appendChild(parkName)
    })
  })

  let basketballCourts = "basketball_courts=Yes"

  fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=vx0odMXRoly9l5yCnqWKCJykT&basketball_courts=Yes")
  .then(parks => parks.json())
  .then(parksData => {
    parksData.forEach((park) => {
      let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
      resultsDiv.appendChild(parkName)
    })
  })

  



