import {Fragment} from "react";
import Link from 'next/link';

export  default function NewsPage(){
	return (
		<Fragment>
			<h1>The news Page</h1>
			<ul>
				<li>
					<Link href="/news/nextjs-is-agreat-framework">
						NextJs is a great framework
					</Link>
				</li>
				<li>
					Something else
				</li>
			</ul>
		</Fragment>
	)
}
