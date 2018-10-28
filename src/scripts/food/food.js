let foodSection = document.getElementById("foodOptions")
let foodButton = document.getElementById("foodButton")


// function to get the value ie the id of my food ethncity of the selection when the button is clicked
foodButton.addEventListener("click", () => {
  // targets the "value" in of my dropdown options
  let clickValue = foodSection.options[foodSection.selectedIndex].value
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
        let searchResultItem = elementFactory("div", null, null, `food-search-div-${food.restaurant.id}`, foodName, saveButton)
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
  foodItineraryItem(appendChild)
  foodItineraryItem.innerHTML = " "

  foodItineraryItem.appendChild(resultDiv);
}

fetch("url", { // Replace "url" with your API's URL
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(legoToSave)
})