const saveToItinerary = (data) => {
  return fetch("http://localhost:8088/itinerary/1", { 
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
}

