// event listeners

let meetUpsButton = document.querySelector(".meetUpsButton")

meetUpsButton.addEventListener("click", () => {
  // targets the value in my dropdown options
  let formDateValue = document.querySelector("#meetUpDates").value
  let splitDate = formDateValue.split(",")
  console.log(splitDate)
  getDate(splitDate)

})

let itineraryObject

fetch("scripts/meetUps/database.json")
.then((data) => data.json())
.then((itineraryDb) => {
  itineraryObject = itineraryDb
})

  document.addEventListener("click", (event) => {
    
    //let saveButton = document.querySelector(".saveButton")
    
    if (event.target.className === 'saveButton') {
      // console.log('event', event.target.parentNode.id);
      let boxedElements = document.querySelector("#" + event.target.parentNode.id).childNodes
      
    //  console.log(boxedElements)

      let currentEvent = {

        name: boxedElements[3].innerHTML,
        address: boxedElements[9].innerHTML,
        free: boxedElements[13].innerHTML
      }
     
      itineraryObject.itinerary = [currentEvent]
      appendIntinerary(itineraryObject)
    }
    
  })

appendIntinerary = (itineraryObject) => {

  document.querySelector(".meetUpsItinerary").innerHTML = ""
  // console.log('itineraryObject', itineraryObject.itinerary)
  for (j = 0; j < itineraryObject.itinerary.length; j++) {
   
    
    let domItinerary = document.querySelector(".meetUpsItinerary")


// ----------------------------------------------------------------------

    // var itineraryResultElement = document.createElement("h2"); 
    // var itineraryResultText = document.createTextNode("Event Selected");

    // itineraryResultElement.appendChild(itineraryResultText); 
    // domItinerary.appendChild(itineraryResultElement);


// -----------------------------------------------------------------------

    var titleElement_1 = document.createElement("h2"); 
    var titleText_1 = document.createTextNode("Event Selected");

    var titleElemtent_2 = document.createElement("h4");                 // Create a <li> titleElemtent
    var titleText_2 = document.createTextNode(itineraryObject.itinerary[j].name);

    titleElement_1.appendChild(titleText_1); 
    domItinerary.appendChild(titleElement_1);

    titleElemtent_2.appendChild(titleText_2); 
    domItinerary.appendChild(titleElemtent_2);
// -----------------------------------------------------------------------

    var addressElement_1 = document.createElement("h3"); 
    var addressText_1 = document.createTextNode("Event Address:");

    var addressElement_2 = document.createElement("p");                 // Create a <li> addressElement_2
    var addressText_2 = document.createTextNode(itineraryObject.itinerary[j].address);
    
    addressElement_1.appendChild(addressText_1); 
    domItinerary.appendChild(addressElement_1);
    
    addressElement_2.appendChild(addressText_2); 
    domItinerary.appendChild(addressElement_2);
    // -------------------------------------------------------------------

    var freeElement_1 = document.createElement("h3"); 
    var freeText_1 = document.createTextNode("Free Admission:");

    var freeElement_2 = document.createElement("p");                 // Create a <li> freeElement_2
    var freeText_2 = document.createTextNode(itineraryObject.itinerary[j].free);

    freeElement_1.appendChild(freeText_1); 
    domItinerary.appendChild(freeElement_1);
     freeElement_2.appendChild(freeText_2); 
    domItinerary.appendChild(freeElement_2);
// ------------------------------------------------------------------------

    // var warningItineraryClass = document.getElementsByClassName("warning")
    // var warningItineraryElement = document.createElement("h3"); 
    // var warningItineraryText = document.createTextNode("Your result has been saved");
    
    // warningItineraryClass.appendChild(warningItineraryText);
    // warningItineraryElement.appendChild(warningItineraryText); 
    // domItinerary.appendChild(warningItineraryElement);

    // console.log(warningItineraryText)

  }
}





