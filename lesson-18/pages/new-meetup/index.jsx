import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import {router} from "next/client";


export default function NewMeetupPage(){
	
	async function addMeetupHandler(meetupData){
		const response = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(meetupData),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		
		const data = await response.json();
		console.log(data);
		
		router.push('/');
	}
	
	return <NewMeetupForm  onAddMeetup={addMeetupHandler} />
}
