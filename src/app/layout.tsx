import type { Metadata } from "next";
import "../styles/globals.scss";
import NavBar from "../components/NavBar";

export const metadata: Metadata = {
    title: "Markdown Editor",
    description: "A simple markdown editor",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <NavBar />
                {children}
            </body>
        </html>
    );
}
