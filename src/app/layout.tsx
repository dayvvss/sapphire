import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sapphire Electronics",
  description: "Premium electronics in Kenya - Sapphire"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Nav />
        <main className="mx-auto max-w-6xl px-4 py-10 md:px-8">{children}</main>
        <footer className="border-t border-slate-100 py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-slate-500 md:px-8">
            <p>Sapphire Electronics · Nairobi, Kenya</p>
            <p>Premium devices, thoughtfully curated.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
