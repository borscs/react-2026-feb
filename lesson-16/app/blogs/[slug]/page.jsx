
export default function Blog({ params }) {
		return (
			<main>
				<h1> Blog Post</h1>
				<p>{params.slug}</p>
			</main>
		)
}
