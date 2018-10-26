

let foodSection = document.getElementById("foodOptions")
let foodButton = document.getElementById("foodButton")



// function to get the value ie the id of my food ethncity of the selection when the button is clicked
foodButton.addEventListener("click", () => {
  // targets the "value" in of my dropdown options
  let clickValue = foodSection.options[foodSection.selectedIndex].value
  console.log(clickValue)
  foodFetch(clickValue)
})



function foodFetch(clickValue) {
  fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=${clickValue}&count=6`, {
    headers: {
      "Content-Type": "application/json",
      "user-key": "96eabc6c9e55bec13dea468806aa7e48"
    }
  })
    .then(food => food.json())
    .then(food => {
      document.querySelector(".searchResultTable").innerHTML = `<h3>Here are your results</h3>`;
      return food
    })
    .then(foodData => {
      foodData.restaurants.forEach((food) => {
        let foodName = elementFactory("p", `${food.restaurant.name}, ${food.restaurant.location.address}. Rating ${food.restaurant.user_rating.aggregate_rating} out of 5.`)
        let saveButton = elementFactory("button", "Save", "saveButton", `food-button-${food.restaurant.id}`)
        console.log(food.restaurant.id)
        let searchResultItem = elementFactory("div", null, null, `food-search-div-${food.restaurant.id}`, foodName, saveButton)
        // itineraryDiv.appendChild(foodName)
        fragment.appendChild(searchResultItem)
        resultsDiv.appendChild(fragment)
      })
    })
}

// let buttonOfSave =document.querySelectorAll(".saveButton")
// buttonOfSave.forEach(button => {
//   button.addEventListener("click", () => {

//   })
// })

// let myResult = document.getElementsByClassName("result")

// buttonOfSave.addEventListener("click", () => {
// //  itineraryDiv.appendChild(myResult)
// console.log("hello")
// return
// })






// fetch("http://localhost:8088/restaurants")
//     .then(food => food.json())
//     .then(foodData => {
//       foodData.forEach((food) => {
//         // console.log(food.restaurant.name)
//         let foodName = elementFactory("p", `${food.restaurant.name}, ${food.restaurant.location.address}. Rated ${food.restaurant.user_rating.aggregate_rating} out of 5`)
//         itineraryDiv.appendChild(foodName)
// })
//     })
