// variables
let itineraryDiv = document.querySelector(".itinerary")

let foodSection = document.getElementById("foodOptions")
let foodButton = document.getElementById("foodButton")


// element creator
function elementFactory(el, content, ...children) {
  let element = document.createElement(el);
  element.innerHTML = content || null
  children.forEach(child => {
    element.appendChild(child)
  })
  return element
}

// function to get the value ie the id of my food ethncity of the selection when the button is clicked
foodButton.addEventListener("click", () => {
  // targets the "value" in of my dropdown options
  let clickValue = foodSection.options[foodSection.selectedIndex].value
  console.log(clickValue)
  foodFetch(clickValue)
})



function foodFetch(clickValue) {
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=${clickValue}`, {
    headers: {
      "Content-Type": "application/json",
      "user-key": "96eabc6c9e55bec13dea468806aa7e48"
    }
  })
    .then(food => food.json())
    .then(foodData => {
      foodData.restaurants.forEach((food) => {
        let foodName = elementFactory("p", `${food.restaurant.name}`)
        itineraryDiv.appendChild(foodName)
      })
    })
  }






// fetch("http://localhost:8088/restaurants")
//     .then(food => food.json())
//     .then(foodData => {
//       foodData.forEach((food) => {
//         // console.log(food.restaurant.name)
//         let foodName = elementFactory("p", `${food.restaurant.name}, ${food.restaurant.location.address}. Rated ${food.restaurant.user_rating.aggregate_rating} out of 5`)
//         itineraryDiv.appendChild(foodName)
// })
//     })
