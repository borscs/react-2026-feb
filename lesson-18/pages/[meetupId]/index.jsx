import MeetupDetail from "../../components/meetups/MeetUpDetail";
import {MongoClient, ObjectId} from "mongodb";

function MeetupDetails() {
	return (
		<MeetupDetail
			image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
			title='First Meetup'
			address='Some Street 5, Some City'
			description='This is a first meetup'
		/>
	);
}

export async function getStaticPaths() {
	const client = await MongoClient.connect('mongodb+srv://borscs:Q8jYTP6YgjdqMGQ@cluster0.guira71.mongodb.net/?appName=Cluster0');
	const db = client.db();
	const meetupsCollection = db.collection('meetups');
	const meetupsData = await meetupsCollection.find({}, {_id: 1}).toArray();
	
	client.close();
	
	return {
		fallback: false,
		paths: meetupsData.map(meetup => ({
			params: {meetupId: meetup._id.toString()}
		}))
	};
}

export async function getStaticProps(context) {
	// fetch data for a single meetup
	
	const meetupId = context.params.meetupId;
	
	const client = await MongoClient.connect('mongodb+srv://borscs:Q8jYTP6YgjdqMGQ@cluster0.guira71.mongodb.net/?appName=Cluster0');
	
	const db = client.db();
	const meetupsCollection = db.collection('meetups');
	const selectedMeetup = await meetupsCollection.findOne({
		_id: new ObjectId(meetupId.toString()),
	});
	
	client.close();
	console.log(selectedMeetup);
	

	
	return {
		props: {
			meetupData: {
				image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
				title:'First Meetup',
				address:'Some Street 5, Some City',
				description:'This is a first meetup',
			}
		},
	};
}

export default MeetupDetails;
