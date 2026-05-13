import { useRouter } from 'next/router';



export default function DetailsPage() {
	const router = useRouter()
	
	const newsId = router.query.newsId
	
	return <h1>Details Page {newsId}</h1>
}
