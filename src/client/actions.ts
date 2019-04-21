const loadEventsUrl = '/api/events';
const removeEventUrl = (eventId: number) => `/api/events/${eventId}/remove`;
const updateEventUrl = (eventId: number) => `/api/events/${eventId}/update`;

export async function loadEvents() {
  const eventsRequest = await fetch(loadEventsUrl);
  return await eventsRequest.json();
}

export async function removeEvent(id: number) {
  const request = await fetch(removeEventUrl(id));

  return await request.json();
}

export async function updateEvent(id: number, data: object) {
  const request = await fetch(updateEventUrl(id), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      body: { data: data }
    }
  });

  return await request.json();
}
