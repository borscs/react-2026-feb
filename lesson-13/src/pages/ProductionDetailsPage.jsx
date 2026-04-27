import {Link, useParams} from "react-router";

export default function ProductionDetailsPage() {
	const params = useParams()
	
	return (
		<>
			<h1>Production Details</h1>
			<p>{params.productId}</p>
			<p>
				<Link to=".." relative='path'>Back</Link>
			</p>
		</>
	)
}
