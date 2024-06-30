import Link from "next/link";
import "./globals.css";
import { ReactNode } from "react";

const Links = [
    { href: "/", label: "Home", id: 1 },
    { href: "/todos", label: "Todos", id: 2 },
];

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" data-theme="winter">
            <body>
                <header>
                    <nav>
                        <ul className="items-center flex"></ul>
                        {Links.map((link) => (
                            <li key={link.id}>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </nav>
                </header>
                <h1>This is root layout</h1>
                <div>{children}</div>
            </body>
        </html>
    );
}
