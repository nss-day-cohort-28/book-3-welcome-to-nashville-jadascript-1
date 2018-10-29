// Results Save Button
function parkEventListener() {
  for (let i = 0; i < 6; i++) {
    let itinerarySaveButton = document.querySelectorAll(".saveParkButton")
    itinerarySaveButton[i].addEventListener("click", () => {
      console.log("click", i)
      let selectedPark = itinerarySaveButton[i].previousSibling
      addParkToItinerary(selectedPark)
      itinerarySaveButton[i].style.visibility = "hidden";
    })
  }
}


// Itinerary save putton (also stores to local Json)
function finalItineraryListener(){
  let finalSaveButton = document.querySelector(".finalButton")
  finalSaveButton.addEventListener("click", () => {
    console.log("click")
    let itineraryObject = {
      park: document.querySelector("#parkItinerary").innerText,
      food: document.querySelector("#foodItinerary").innerText,
      event: document.querySelector("#meetUpsItinerary").innerText,
      concert: document.querySelector("#concertItinerary").innerText
    }    
    saveToItinerary(itineraryObject)
  })
}
finalItineraryListener()

// this function should take in our selected Paragraph and appended it to a div with the class parkItinerary in our itinerary div
function addParkToItinerary(resultDiv) {
  let parkItin = document.querySelector("#parkItinerary")
  parkItin.innerHTML = null
  let parkItineraryItem = document.querySelector("#parkItinerary");
  parkItineraryItem.appendChild(resultDiv);
}





// // function that I hope will loop through all my save buttons in the resultsDiv
// function itineraryListeners() {
//   let buttonAddItinerary = document.querySelectorAll(".saveParkButton")
//   buttonAddItinerary.forEach((button) => {
//     // then add a click event
//     button.addEventListener("click", (selectedButton) => {
//       // this console log isnt working
//       console.log("clicked") 
//       // the gets the unique part of the id from each button
//       let parkId = selectedButton.target.id.substring(15, 23);
//       // neither is this console log
//       console.log(selectedButton.target)
// // it then takes the unique id and puts it in the next function
//       pullSelectedElement(parkId);
//     });
//   });
// }

// // this function takes the id from the last function
// function pullSelectedElement(ID) {
//   // and finds the div with the same unique id
//   let selectedpark = document.querySelector(`#searchParkResults-${ID}`);
//   // and puts it in the next function
//   addToItinerary(selectedpark);
// };

// // this function should take in our selected Div and appended it to the itinerary Div with the class .itinerary
// function addToItinerary(resultDiv) {
//     itineraryDiv.appendChild(resultDiv);
// }
// itineraryListeners()