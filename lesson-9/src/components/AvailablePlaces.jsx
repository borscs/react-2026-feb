import Places from './Places.jsx';

import {fetchAvailablePlaces} from "../api/http.js";
import {sortPlacesByDistance} from "../loc.js";
import {useFetch} from "../hooks/useFetch.js";
import Error from "./Error.jsx";

async function fetchPlaces() {
	const places = await fetchAvailablePlaces();
	return new Promise((resolve) => navigator.geolocation.getCurrentPosition((position) => {
		const sortedPlaces = sortPlacesByDistance(
			places,
			position.coords.latitude,
			position.coords.longitude
		);
		resolve(sortedPlaces);
	}));
}


export default function AvailablePlaces({onSelectPlace}) {
	const {isFetching, error, fetchedData: availablePlaces } =  useFetch(fetchPlaces, [])
	
	if (error) {
		return <Error title="An error occurred!" message={error.message}/>;
	}
	return (
		<>
			<button onClick={fetchPlaces}>Fetch DATA</button>
			<Places
				title="Available Places"
				places={availablePlaces}
				isLoading={isFetching}
				fallbackText="No places available."
				onSelectPlace={onSelectPlace}
			/>
		
		</>
	);
}
