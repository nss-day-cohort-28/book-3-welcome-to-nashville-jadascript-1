let counter = 0

let getDate = (splitDate) => {
 
  document.querySelector(".searchResultTable").innerHTML = ""
   
fetch(`https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.latitude=36.174465&location.longitude=-86.767960&start_date.range_start=${splitDate[0]}T00%3A00%3A00Z&start_date.range_end=${splitDate[1]}T00%3A00%3A00Z&token=F4AWXXJ4FU34AD7CC42C&expand=venue`)
  .then((eventBriteData) => eventBriteData.json())
  .then((eventsData) => {
    console.log(eventsData)
    let meetupslist = document.querySelector(".searchResultTable")

    meetupslist.innerHTML += 
    `<h3 class="warning">Search Results</h3>`

    for (let i = 0; i < 5; i++) {
      let currentEvent = eventsData.events[i]

      
    
      let eventAddress = currentEvent.venue.address.localized_multi_line_address_display

      let admissionFee = currentEvent.is_free
      //       if (currentEvent.venue.address.city === "Nashville" ){


      if (currentEvent.is_free === true) {
        // //         let loopedData = currentEvent.venue.address.city
        admissionFee = "Yes"

      }
      else if (currentEvent.is_free === false) {
        admissionFee = "No"
      }
      meetupslist.innerHTML += `
              <div class="boxedEvent" id="boxedEvent_${[i]}">
              <h3 class="parameter">~ Event ~</h3>
              <h4 class="parameter">${currentEvent.name.text}</h4> <button class="saveButton">Save to Itinerary</button>
              <h3 class="parameter">Will be at:</h3>
              <p class=parameter">${eventAddress}</p>
              <h3 class="parameter">Free Admission:</h3>
              <p class="parameter">${admissionFee}</p>
              </div>
              `
    counter++
    }
    meetupslist.innerHTML += 
    `<h3 class="warning">Remember to save the event you are looking for</h3>`
    

  })
}



// {<h3>Starting Time:</h3>
// {<p>${currentEvent.start.utc}</p>}
// {<h3>Ends at:</h3>}
// {<p>${currentEvent.end.utc}</p>}}

  


// }

// meetUpsResultsPage()
  // ---------------------------------------------------------------

  // step 2 
    // wrap this in function and have it be called by an event listener
    // make an event listener that does the above by a click 
