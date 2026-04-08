import {useEffect, useState} from "react";

export function useFetch(fetchFn, initialValue) {
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState();
	const [fetchedData, setFetchedData] = useState(initialValue);
	
	
	useEffect(() => {
		async function fetchData() {
			setIsFetching(true);
			setError(null);
			try {
				const data = await fetchFn();
				setFetchedData(data);
			} catch (error) {
				setError(error.message);
			}
			setIsFetching(false);
		}
		
		fetchData();
	}, [fetchFn]);
	
	
	return {
		fetchedData,
		isFetching,
		error,
	}
}
