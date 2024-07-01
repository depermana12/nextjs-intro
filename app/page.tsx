import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link href="/todos" rel="noopener noreferrer">
        Todos
      </Link>
    </main>
  );
}
