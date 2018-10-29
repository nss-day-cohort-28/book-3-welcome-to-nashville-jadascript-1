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
// let itinObject

// fetch("http://localhost:8088/itinerary")
//   .then((data) => data.json())
//   .then((itineraryDb) => {
//     itinObject = itineraryDb
//   })

// let finalButton = document.querySelectorAll(".finalButton")
// adds an click event on the save button and targets the info paragraph
function eventlisten () {
  for (let i = 0; i < 6; i++) {
  let buttonOfSave = document.querySelectorAll(".saveButton")
  buttonOfSave[i].addEventListener("click", () => {
  let selectedFood = buttonOfSave[i].previousSibling
  addToItinerary(selectedFood)
  buttonOfSave[i].style.visibility = "hidden";
  })
    // addToLocal(itinObject)
}
}

// this function should take in our selected Paragraph and appended it to a div with the class foodItinerary in our interary div
function addToItinerary(resultDiv) {
  let foodItineraryItem = document.querySelector("#foodItinerary");
  // foodItineraryItem.innerHTML = "<button class='finalButton'>Save</button>"
  foodItineraryItem.appendChild(resultDiv);

}


function finalItineraryListen() {
  let finalSaveButton = document.querySelector(".finalButton")
  finalSaveButton.addEventListener("click", () => {
    console.log("click")
    let itineraryObject = {
      park: document.querySelector("#parkItinerary").innerText,
      food: document.querySelector("#foodItinerary").innerText,
      event: document.querySelector("#meetUpsItinerary").innerText,
      concert: document.querySelector("#concertItinerary").innerText
    }
    saveToItin(itineraryObject)
  })
}
finalItineraryListen()

// addToLocal = (data) => {
//   console.log(JSON.stringify(data));
//   let addLocal = new XMLHttpRequest();
//   addLocal.open("POST", "http://localhost:8088/itinerary", true);
//   addLocal.setRequestHeader('Content-Type', 'application/json');
//   addLocal.setRequestHeader('Access-Control-Allow-Origin', '*');
//   addLocal.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   addLocal.send(JSON.stringify(data));
// }



// function addToLocal (data) {
//   let finalButton =document.querySelectorAll(".finalButton")
//   finalButton.addEventListener("clcik", () => {
//   return fetch("http://localhost:8088/itinerary", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   })
//     .then(contacts => contacts.json())
//   })

// }

const saveToItin = (data) => {
  return fetch("http://localhost:8088/itinerary/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
}