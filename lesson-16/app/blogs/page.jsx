import Link from "next/link";

export default function Blogs() {
	
	return (
		<main>
			<h1>Blogs</h1>
			<p>
				<Link href="/blogs/post-1">Post 1</Link>
			</p>
			<p>
				<Link href="/blogs/post-2">Post 2</Link>
			</p>
		</main>
	)
}
