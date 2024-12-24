import { Afacad_Flux } from 'next/font/google'
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

const afacad = Afacad_Flux({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={afacad.className}>
        <Navbar />
        <div className=" mb-=5">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
