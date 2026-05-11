import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <main>
      <Header/>
      <p><Link href="/about">About use</Link></p>
    </main>
  );
}
