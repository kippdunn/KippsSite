import type { Metadata } from "next"
import { Cormorant_Garamond, Poppins } from "next/font/google"
import "./globals.css"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["400"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600"],
})

export const metadata = {
  title: "Kipp Dunn",
  description: "Website for the legendary, and extrodinarily humble, Kipp",
  icons: {
    icon: '/kipp-site-2.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${poppins.variable} bg-neutral-100`}
      >
        <nav className="w-full flex justify-between items-center px-8 py-4 shadow bg-white mb-8">
          <a href="/" className="text-2xl font-bold hover:cursor-pointer">Kipp Dunn</a>
          <div className="flex gap-6">
            <a href="/about" className="hover:underline">About Me</a>
            <a href="/quotes" className="hover:underline">Favorite Quotes</a>
            <a href="/posts" className="hover:underline">Posts</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
