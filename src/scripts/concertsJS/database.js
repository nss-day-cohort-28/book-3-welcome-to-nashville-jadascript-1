//uses queryselector to create space for our results to appear

//pointing to our html class music events button
let musicEvents = document.querySelector(".musicEvents")
//where we perform the actual search
//get input 
let musicSearch = document.querySelector(".searchResultTable")

//compare user input against venue name
//the event listener allows us to click on the button and perform a function
musicEvents.addEventListener("click", function () {
  let musicSearch = venueName.value

  

    document.querySelector(".searchResultTable").innerHTML = ""
    let musicEvents = venueName.value
  function concertEventListener() {
    let concertSaveButton = document.querySelector(".Save")
    concertSaveButton.addEventListener("click", () => {
      let selectedVenue = concertSaveButton.previousSibling
     addConcertItinerary(selectedVenue)
    })
  }


  function addConcertItinerary(resultDiv) {
    let concertItinerary = document.querySelector("#concertItinerary");
    concertItinerary.appendChild(resultDiv);
  }



  fetch("https://api.songkick.com/api/3.0/metro_areas/11104/calendar.json?apikey=p8YGjn0x2SYsMtkJ&page=1&min_date=2018-10-29&max_date=2018-10-29") //gets data
    .then(resultsPage => resultsPage.json())      //transforms to json
    .then(resultsPage => {     //
      document.querySelector(".searchResultTable").innerHTML = `<h3>Here are your results</h3>`;   //this sets the search reults back to nothing
      return resultsPage
    }) //returns empty box
    .then(resultsData => {                      //parses json


      console.log(resultsData)

      resultsData.resultsPage.results.event.forEach((result) => {
        let venueName = elementFactory("p",`${result.venue.displayName}, ${ result.performance[0].displayName}, ${result.start.time}`)
        console.log("venueName", venueName)
        let buttonSave = elementFactory("button", "Save", "Save")
        if (musicSearch === result.venue.displayName) {
          resultsDiv.appendChild(venueName)
          resultsDiv.appendChild(buttonSave)
        }
      })
      concertEventListener()
      
    })
})

const saveToItinerary = (data) => {
  return fetch("http://localhost:8088/itinerary/1", { 
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
}

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