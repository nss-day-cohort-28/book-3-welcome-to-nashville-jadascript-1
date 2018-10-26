

fetch(`https://www.eventbriteapi.com/v3/events/search/?location.longitude=-86.767960&sort_by=date&token=F4AWXXJ4FU34AD7CC42C&location.latitude=36.174465&page=2&expand=venue`)
  .then((eventBriteData) => eventBriteData.json())
  .then((eventsData) => {
    let meetupslist = document.querySelector(".searchResultTable")

    for (let i = 0; i < eventsData.events.length; i++) {
      let currentEvent = eventsData.events[i]

      // //         console.log(currentEvent)


      let admissionFee = currentEvent.is_free
      //       if (currentEvent.venue.address.city === "Nashville" ){


      if (currentEvent.is_free === true) {
        // //         let loopedData = currentEvent.venue.address.city
        admissionFee = "Yes"

      }
      else if (currentEvent.is_free === false) {
        admissionFee = "No"
      }
      meetupslist.innerHTML += `<h3>Event:</h3>
              <h2>${currentEvent.name.text}</h2>
              <h3>Starting Time:</h3>
              <p>${currentEvent.start.utc}</p>
              <h3>Ends at:</h3>
              <p>${currentEvent.end.utc}</p>
              <h3>Free Admission:</h3>
              <p>${admissionFee}</p>`


    }
  })

  


// }

// meetUpsResultsPage()
  // ---------------------------------------------------------------

  // step 2 
    // wrap this in function and have it be called by an event listener
    // make an event listener that does the above by a click 
