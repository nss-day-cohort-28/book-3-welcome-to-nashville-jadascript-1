//event listeners
// let itineraryObject2

// fetch("scripts/meetUps/database.json")
// .then((data) => data.json())
// .then((itineraryDb) => {
//   itineraryObject2 = itineraryDb
// })



document.addEventListener("click", (venue) => {
    
  //let saveButton = document.querySelector(".saveButton")
  
  if (event.target.className === 'savingButton') {
    // console.log('event', event.target.parentNode.id);
    let boxedElements2 = itineraryDiv.appendChild(venueName)
    
   console.log(boxedElements2)

    // let currentVenue = {

    //   name: boxedElements[3].innerHTML,
    //   address: boxedElements[9].innerHTML,
    //   free: boxedElements[13].innerHTML
    // }
   
    // itineraryObject2.itinerary = [currentVenue]
    // console.log(currentVenue)
    // appendIntinerary(itineraryObject)
    // addToLocal(itineraryObject)
  }
  
})