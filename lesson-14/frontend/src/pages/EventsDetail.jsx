import {redirect, useRouteLoaderData} from 'react-router-dom';
import EventItem from "../components/EventItem";

export default function EventsDetail() {
  const data = useRouteLoaderData('event-detail');
  const event = data.event;
  
  return (
    <EventItem event={event} />
  )
}



export async function loader({ params }) {
  const id = params.eventId;
  const response = await fetch('http://localhost:8080/events/'+id);
  
  if(!response.ok){
    throw new Response(JSON.stringify({ message: 'Could not fetch event details.' }), {
      status: 500,
    });
  }
  
  return response;
}


export async function action({ params, request }) {
  const eventId = params.eventId;
  
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
  });
  
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not delete event.' }), {
      status: 500,
    });
  }
  return redirect('/events');
}
