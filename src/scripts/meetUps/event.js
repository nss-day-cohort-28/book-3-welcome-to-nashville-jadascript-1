// event listeners

let meetUpsButton = document.querySelector(".meetUpsButton")

meetUpsButton.addEventListener("click", () => {
  // targets the value in my dropdown options
  let formDateValue = document.querySelector("#meetUpDates").value
  let splitDate = formDateValue.split(",")
  console.log(splitDate)
  getDate(splitDate)

})
// THE ONE BELOW IS FOR THE SAVE BUTTON


let saveMeetBtn = document.querySelector(".searchResultTable")
// document.addEventListener("click", (event) => {
saveMeetBtn.addEventListener("click", (event) => {
  //let saveButton = document.querySelector(".saveButton")

  if (event.target.className === 'saveMeetBtn') {
    // console.log('event', event.target.parentNode.id);
    let boxedElements = document.querySelector("#" + event.target.parentNode.id).childNodes

    //  console.log(boxedElements)

    let currentEvent = {

      name: boxedElements[3].innerHTML,
      address: boxedElements[9].innerHTML,
      free: boxedElements[13].innerHTML,
      // dateAdded: Date.now()
    }

    // itineraryObject = currentEvent
    console.log(currentEvent)
    appendIntinerary(currentEvent)
    // addToLocal(currentEvent)
    // addEventToItinerary(currentEvent)
  }

})

function addEventToItinerary(resultDiv) {
  let eventItin = document.querySelector("#meetUpsItinerary")
  eventItin.innerHTML = null
  let eventItineraryItem = document.querySelector("#meetUpsItinerary");
  eventItineraryItem.appendChild(resultDiv);
}



// *


appendIntinerary = (obj) => {
  let domItinerary = document.querySelector("#meetUpsItinerary")

  domItinerary.innerHTML = "yeee"
  // console.log('itineraryObject', itineraryObject.itinerary)
  // for (let key in obj) {
  //   let currentItem = obj[key]
console.log("item")
    domItinerary.innerHTML = 
    `<h3>Event: <h3>
    <h4>${obj.name}</h4>
    <h3>Address: <h3>
    <h4>${obj.address}</h4>
    <h3>Free Admission: <h3>
    <h4>${obj.free}</h4>`
}




const saveToItinerary = (data) => {
  return fetch("http://localhost:8088/itinerary/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
}

function finalItineraryListener() {
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



