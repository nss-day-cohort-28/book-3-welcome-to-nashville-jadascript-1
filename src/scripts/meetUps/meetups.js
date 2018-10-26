// This function will populate the results page when the button is clicked on meetups

function meetUpsResultsPage() {

  fetch("http://localhost:3000/events")
    .then((eventBriteData) => eventBriteData.json())
    .then((eventsData) => {
  
      // -----------------------------------------------------------
      let meetupslist = document.querySelector(".searchResultTable")
  
      for (let i = 0; i < eventsData.length; i++) {
        let currentEvent = eventsData[i]
        // let admissionFee = 'No'
        // if (currentEvent.is_free) {
        //   admissionFee = 'Yes'
        // }
        let admissionFee = currentEvent.is_free
        if (currentEvent.venue.address.city === "Nashville" ){
        // console.log(eventsData[i].venue.address.city)
        if (currentEvent.is_free === true) {
          let loopedData = currentEvent.venue.address.city
          admissionFee = "Yes"
  
          console.log(admissionFee)
  
          // meetupslist.innerHTML += 
          // `<h3>Event:</h3>
          // <h2>${currentEvent.name.text}</h2>
          // <h3>Starting Time:</h3>
          // <p>${currentEvent.start.utc}</p>
          // <h3>Ends at:</h3>
          // <p>${currentEvent.end.utc}</p>
          // <h3>Admission Fee:</h3>
          // <p>$`
        }
        else if (currentEvent.is_free === false) {
          admissionFee = "No"
        }
        meetupslist.innerHTML += 
        `<h3>Event:</h3>
        <h2>${currentEvent.name.text}</h2>
        <h3>Starting Time:</h3>
        <p>${currentEvent.start.utc}</p>
        <h3>Ends at:</h3>
        <p>${currentEvent.end.utc}</p>
        <h3>Free Admission:</h3>
        <p>${admissionFee}</p>`
      }
      }
    })
  }
  
  meetUpsResultsPage()
  // ---------------------------------------------------------------
  
  // step 2 
    // wrap this in function and have it be called by an event listener
    // make an event listener that does the above by a click 
  