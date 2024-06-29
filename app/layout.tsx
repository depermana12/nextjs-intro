import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" data-theme="winter">
            <body>{children}</body>
        </html>
    );
}
