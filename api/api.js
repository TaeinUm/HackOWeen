import {thread_samples} from "../thread_samples";

const server_uri = "https://port-0-hackoween-12fhqa2llo90vewx.sel5.cloudtype.app"

export async function getThreadsByLocation(location) {
  return thread_samples;

  const response = await fetch(`${server_uri}/threads?location=${location}`, {
    method: "GET",
  })
  return await response.json();
}

export async function createThread(thread) {
  const response = await fetch(`${server_uri}/api/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
    },
    body: JSON.stringify(thread),
  })
  return await response.json();
}

export async function getAllThreads() {
  const response = await fetch(`${server_uri}/api/comments`, {
    method: "GET",
  })
  return await response.json();
}

export async function getAllMarkers(){
  const response = await fetch(`${server_uri}/api/crowd-map`, {
    method: "GET",
  })
  return await response.json();
}




//
// {
//   "thread": "This is a sample thread.",
//   "coords": {"accuracy": 5, "altitude": 0, "altitudeAccuracy": -1, "heading": -1, "latitude": 37.785834, "longitude": -122.406417, "speed": -1},
//   "timestamp": 1698392749360.5981
// }
