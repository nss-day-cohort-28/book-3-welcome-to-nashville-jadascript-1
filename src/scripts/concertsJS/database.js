//uses queryselector to create space for our results to appear
            // let resultsDiv = document.querySelector(".searchResultTable")
//pointing to our html class music events button
let musicEvents = document.querySelector(".musicEvents")
//where we perform the actual search
//get input 
let musicSearch = document.querySelector(".searchResultTable")





//compare user input against venue name
//the event listener allows us to click on the button and perform a function
musicEvents.addEventListener("click", function () {
  document.querySelector(".searchResultTable").innerHTML = ""
  let musicSearch = venueName.value

// musicEvents.addEventListener("click", function () {

//   document.querySelector(".searchResultTable").innerHTML = ""
//   let musicEvents = venueName.value
  

  fetch("https://api.songkick.com/api/3.0/metro_areas/11104/calendar.json?apikey=p8YGjn0x2SYsMtkJ&page=1&min_date=2018-10-29&max_date=2018-10-29") //gets data
    .then(resultsPage => resultsPage.json())      //transforms to json
    .then(resultsPage => {     //
      document.querySelector(".searchResultTable").innerHTML = `<h3>Here are your results</h3>`;   //this sets the search reults back to nothing
      return resultsPage
    }) //returns empty box
    .then(resultsData => {                      //parses json


      console.log(resultsData.resultsPage.results.event[2])

      resultsData.resultsPage.results.event.forEach((result) => {

        // for (i = 0; i < resultsData.resultsPage.results.event.length; i++) {
        //   if(resultsData.resultsPage.resultsresult.venue.displayName)
        // // if (musicSearch < 5) {  //added by alfonso
        // // let venueName = elementFactory("p", result.venue.displayName, "" , newId[i])
        // // console.log("venueName", venueName)
        // // let artistName = elementFactory("p", result.performance[0].displayName)
        // // // console.log(artistName)
        // // let eventTime = elementFactory("p", result.start.time)
        // // let buttonSave = elementFactory("button", "Save", "savingButton")
        // // // if (musicSearch === result.venue.displayName) {
        // //   resultsDiv.appendChild(venueName)
        // //   resultsDiv.appendChild(artistName)
        // //   resultsDiv.appendChild(buttonSave)
        // //   resultsDiv.appendChild(eventTime)

        // // }
        // }
      // }  //added by alfonso

      })

    })
})