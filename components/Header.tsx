
import Link from "next/link";

export default function Header () {
  return (
    <header className="text-2xl font-bold text-center py-6 border-b mb-8">
      <h1>
        <Link href="/">
          Next.js and MDX blog
        </Link>
      </h1>
    </header>
  );
};
