import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <Link href="/posts" className="mt-24 border rounded px-6 py-3 text-lg transition hover:bg-gray-100 hover:shadow-md active:scale-95">
        Blog Page
      </Link>
    </main>
  );
}
