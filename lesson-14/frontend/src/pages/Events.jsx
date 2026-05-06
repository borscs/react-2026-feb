import EventsList from "../components/EventsList";
import { useLoaderData } from 'react-router-dom';

export default function Events(){
	const data = useLoaderData();
	const events = data.events;
	
	return <EventsList events={events}/>;
	
	// const [isLoading, setIsLoading] = useState(false);
	// const [fetchedEvents, setFetchedEvents] = useState();
	// const [error, setError] = useState();
	//
	// useEffect(() => {
	// 	async function fetchEvents(){
	// 		setIsLoading(true);
	// 		try {
	// 			const response = await fetch('http://localhost:8080/events');
	// 			if (!response.ok) {
	// 				throw new Error('Something went wrong!');
	// 			}
	// 			const data = await response.json();
	// 			setFetchedEvents(data.events);
	// 		} catch (error) {
	// 			setError(error.message || 'Something went wrong!');
	// 		}
	// 		setIsLoading(false);
	// 	}
	//
	// 	fetchEvents();
	// }, []);
	
	// return (
	// 	<>
	// 		<div style={{textAlign: 'center'}}>
	// 			{isLoading &&<p>Loading...</p>}
	// 			{error && <p>{error}</p>}
	// 			{!isLoading && !error && fetchedEvents && <EventsList events={fetchedEvents}/>}
	// 		</div>
	// 	</>
	// )
}



export async function loader(){
		const response = await fetch('http://localhost:8080/events');
		
		if (!response.ok) {
			throw new Response(JSON.stringify({message: 'Could not fetch events'}), {
				status: 500,
			});
		} else {
			return response;
		}
}
