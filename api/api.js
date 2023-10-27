import {thread_samples} from "../thread_samples";

const server_uri = ""

export async function getThreadsByLocation(location) {
  return thread_samples;

  const response = await fetch(`${server_uri}/threads?location=${location}`, {
    method: "GET",
  })
  return await response.json();
}

export async function getAllThreads() {
  return thread_samples
}
