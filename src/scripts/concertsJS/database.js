















































//uses queryselector to create space for our results to appear
let itineraryDiv = document.querySelector(".searchResultTable")
//pointing to our html class music events button
let musicEvents = document.querySelector(".musicEvents")
//where we perform the actual search
//get input 
    let venueSearchName = document.querySelector(".venueSearchName")  
    
    
    //compare user input against venue name
    //the event listener allows us to click on the button and perform a function
    musicEvents.addEventListener("click", function(){
      let userVenueInput = venueSearchName.value 
    
  console.log(userVenueInput)
      fetch("http://localhost:8088/resultsPage")     //gets data
      .then(resultsPage => resultsPage.json())      //transforms to json
      .then(resultsData => {                      //parses json
        
        
      console.log(resultsData)
      
      resultsData.results.event.forEach((result) => {
        let venueName = elementFactory("p", result.venue.displayName)
        let artistName = elementFactory("p",result.performance[0].displayName)
        console.log(artistName)
       // let eventTime = elementFactory("p", result.start.time)
        if(userVenueInput === result.venue.displayName)
        itineraryDiv.appendChild(venueName)
        itineraryDiv.appendChild(artistName)
        // itineraryDiv.appendChild(eventTime)
        
  
      })
      
    })
    
  })

  

  




  


