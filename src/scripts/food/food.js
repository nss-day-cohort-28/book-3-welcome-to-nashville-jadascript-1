

let foodSection = document.getElementById("foodOptions")
let foodButton = document.getElementById("foodButton")



// function to get the value ie the id of my food ethncity of the selection when the button is clicked
foodButton.addEventListener("click", () => {
  // targets the "value" in of my dropdown options
  let clickValue = foodSection.options[foodSection.selectedIndex].value
  // console.log(clickValue)
  foodFetch(clickValue)
})


// function to fetch the data from the external API based on what food ethnicity was chosen

function foodFetch(clickValue) {
  fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=${clickValue}&count=6`, {
    headers: {
      "Content-Type": "application/json",
      "user-key": "96eabc6c9e55bec13dea468806aa7e48"
    }
  })
    .then(food => food.json())
    // clears the search result div and adds a heading before adding the new results
    .then(food => {
      document.querySelector(".searchResultTable").innerHTML = `<h3>Here are your results</h3>`;
      return food
    })
    // creates p, buttons and divs for all results and can give unique ids to our fetched data
    .then(foodData => {
      foodData.restaurants.forEach((food) => {
        
        let foodName = elementFactory("p", `${food.restaurant.name}, ${food.restaurant.location.address}. Rating ${food.restaurant.user_rating.aggregate_rating} out of 5.`, null, `food-para-${food.restaurant.id}` )
        let saveButton = elementFactory("button", "Save", "saveButton", `food-button-${food.restaurant.id}`)
        console.log(food.restaurant.id)
        let searchResultItem = elementFactory("div", null, null, `food-search-div-${food.restaurant.id}`, foodName, saveButton)
        // itineraryDiv.appendChild(foodName)
        fragment.appendChild(searchResultItem)
        resultsDiv.appendChild(fragment)
      }) 
       eventlisten()
    }) 
}


// adds an click event on the save button and targets the info paragraph
function eventlisten () {
  for (let i = 0; i < 6; i++) {
  let buttonOfSave = document.querySelectorAll(".saveButton")
  buttonOfSave[i].addEventListener("click", () => {
  console.log("click", i)
  let selectedFood = buttonOfSave[i].previousSibling
  console.log(selectedFood)
  addToItinerary(selectedFood)
  buttonOfSave[i].style.visibility = "hidden";
  })
 
}
}

// this function should take in our selected Paragraph and appended it to a div with the class foodItinerary in our interary div
function addToItinerary(resultDiv) {
  let foodItineraryItem = document.querySelector(".foodItinerary");
  foodItineraryItem.appendChild(resultDiv);
}











// // function that i hope will loop through all my save buttons
// // function itineraryListeners() {
// //   let buttonOfSave = document.querySelectorAll(".saveButton")
// //   buttonOfSave.forEach((button) => {

// //     // then add anclick event
//     button.addEventListener("click", (selectedButton) => {
//       // this console log isnt working
//       console.log("clicked") 
//       console.log(selectedButton.target.id.length)
//       // the gets the unique part of the id from each button
//       let foodId = selectedButton.target.id.substring(12, 19);
//       // neither is this console log
//       console.log(selectedButton.target)
// // it then takes the unique id and puts it in the next function
//       pullSelectedElement(foodId);
//     });
//   });
// }


// // this function takes the id from the last function
// function pullSelectedElement(ID) {
//   // and finds the paragraph with the same unqiue id
//   let selectedFood = document.querySelector(`#food-para-${ID}`);
//   // and puts it in the next function
//   addToItinerary(selectedFood);
// };

// // this function should take in our selected Paragraph and appended it to a div with the class foodItinerary in our interary div
// function addToItinerary(resultDiv) {
//   let foodItineraryItem = document.querySelector(".foodItinerary");
//     foodItineraryItem.appendChild(resultDiv);
//     return foodItineraryItem
// }
// itineraryListeners()








