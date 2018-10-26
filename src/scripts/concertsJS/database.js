//uses queryselector to create space for our results to appear
let itineraryDiv = document.querySelector(".searchResultTable")
//pointing to our html class music events button
let musicEvents = document.querySelector(".musicEvents")
//where we perform the actual search
//get input 
let venueSearchName = document.querySelector(".venueSearchName")


//compare user input against venue name
//the event listener allows us to click on the button and perform a function
musicEvents.addEventListener("click", function () {
  let userVenueInput = venueSearchName.value

  fetch("https://api.songkick.com/api/3.0/metro_areas/11104/calendar.json?apikey=p8YGjn0x2SYsMtkJ&page=1&min_date=2018-10-29&max_date=2018-10-29")
    //gets data
    .then(resultsPage => resultsPage.json())      //transforms to json
    .then(resultsPage => {     //
      document.querySelector(".searchResultTable").innerHTML = null;   //this sets the search reults back to nothing
      return resultsPage
    }) //returns empty box
    .then(resultsData => {                      //parses json


      console.log(resultsData)

      resultsData.resultsPage.results.event.forEach((result) => {
        let venueName = elementFactory("p", result.venue.displayName)
        console.log("venueName", venueName)
        let artistName = elementFactory("p", result.performance[0].displayName)
        console.log(artistName)
        let eventTime = elementFactory("p", result.start.time)
        if (userVenueInput === result.venue.displayName) {
          itineraryDiv.appendChild(venueName)
          itineraryDiv.appendChild(artistName)
          itineraryDiv.appendChild(eventTime)

        }


      })

    })
})












