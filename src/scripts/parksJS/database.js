// Generic fetch function just for an example

//  fetch("http://localhost:8088/food")
//   .then(foods => foods.json())
//   .then(parsedFoods => {
//     parsedFoods.forEach((food) => {
//       localFood.push(food)
//       fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
//         .then(response => response.json())
//         .then(productInfo => {
//           // calling our element creting function with our data that has been extracted from the local and external API
//           let title = elementFactory("h2", food.name)
//           let subtitle = elementFactory("h3", food.ethnicity)
//           let ingredients = elementFactory("p", productInfo.product.ingredients_text)
//           let nutrients = elementFactory("p", `Calories per serving: ${productInfo.product.nutriments.energy_serving}. Fat per serving ${productInfo.product.nutriments.fat_serving}. Sugar per serving: ${productInfo.product.nutriments.sugars_serving}. `)
//           let foodCard = elementFactory("div", null, title, subtitle,ingredients, nutrients)
//           fragment.appendChild(foodCard)
//           foodlist.appendChild(fragment)
//         })
//     })
//   });

// Target Elements

// Itinerary
let itineraryDiv = document.querySelector(".itinerary")
// Results Table
let resultsDiv = document.querySelector(".searchResultTable")


// Fetch functions that call our DOM function that creates the HTML element

// Insert park name, address, and year established into the itinerary Div
fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=vx0odMXRoly9l5yCnqWKCJykT")
  .then(parks => parks.json())
  .then(parksData => {
    parksData.forEach((park) => {
      let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
      itineraryDiv.appendChild(parkName)
    })
  })

  //Insert park name, address, and year established into the Results Div
  // fetch("http://localhost:8088/parks")
  // .then(parks => parks.json())
  // .then(parksData => {
  //   parksData.forEach((park) => {
  //     let parkName = elementFactory("p", `${park.park_name}- Address: ${park.mapped_location_address}. Year Established: ${park.year_established}`)
  //     resultsDiv.appendChild(parkName)
  //   })
  // })
