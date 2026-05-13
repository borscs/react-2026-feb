'use client';

import { useFormStatus } from 'react-dom';

export default function MealFormSubmitOn() {
	
	const { pedding } = useFormStatus();
	
	return (
		<button disabled={pedding}>
			{pedding ? 'Submitting...' : 'Share Meal'}
		</button>
	)
}
