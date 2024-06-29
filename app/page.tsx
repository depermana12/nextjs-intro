import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Page() {
    return (
        <main>
            <Link href="/users" target="_blank" rel="noopener noreferrer">
                USERS
            </Link>
            <ProductCard />
        </main>
    );
}
