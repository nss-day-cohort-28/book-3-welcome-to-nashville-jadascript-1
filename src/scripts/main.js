// function that will create a certain element 
function elementFactory(el, content, ...children) {
  // creates any element you pass through el
  let element = document.createElement(el);
  // allows any content to be passed to the element through content or nothing (null)
  element.innerHTML = content || null
  // appends the children (passed through with children) to the element
  children.forEach(child => {
    element.appendChild(child)
  })
  // returns the element
  return element
}


// const alfonso = "giphy"   JS for main page
fetch("http://localhost:3000/events")
  .then((eventBriteData) => eventBriteData.json())
  .then((eventsData) => {
    // console.table(eventsData.length)

    // -----------------------------------------------------------
    let meetupslist = document.querySelector("#eventos")

    for (let i = 0; i < eventsData.length; i++) {
      let currentEvent = eventsData[i]
      // console.log(eventsData[i].venue.address.city)
      if (currentEvent.venue.address.city === "Nashville") {
        let loopedData = currentEvent.venue.address.city
        console.log(loopedData)
        meetupslist.innerHTML += `<p>${currentEvent.name.text}</p>`
      }
    }
   
  })
// ---------------------------------------------------------------



// fetch("http://localhost:3000/events")

// fetch("https://www.eventbriteapi.com/v3/events/search/?location.address=Nashville&expand=venue&sort_by=date&token=F4AWXXJ4FU34AD7CC42C")

// let localEvents = []

// fetch("https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&sort_by=date", {
//   headers: {
//     "Authorization": "Bearer F4AWXXJ4FU34AD7CC42C"
//   }
// })
  // .then(eventData => eventData.json())
  // .then(parsedEvents => {
  //   parsedEvents.forEach((events) => {
  //     localEvents.push(events)
  //     fetch(`http://localhost:3000/events.json`)
  //       .then(response => response.json())
  //       .then(events => {
          // calling our element creting function with our data that has been extracted from the local and external API
          // let title = elementFactory("h2", events.name)
          // let time = elementFactory("h3", events.start.utc)
          // let address = elementFactory("p", events.venue.address.localized_multi_line_address_display)
          // // let nutrients = elementFactory("p", `Calories per serving: ${productInfo.product.nutriments.energy_serving}. Fat per serving ${productInfo.product.nutriments.fat_serving}. Sugar per serving: ${productInfo.product.nutriments.sugars_serving}. `)
          // let nashvilleEvents = elementFactory("div", null, title, time,address)
          // fragment.appendChild(nashvilleEvents)
          // foodlist.appendChild(fragment)
  //       })
  //   })
  // });