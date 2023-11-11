import Navbar from "@/components/UI/Navbar/Navbar";
import "./globals.scss";
import { Poppins } from "next/font/google";
import Footer from "@/components/UI/Footer/Footer";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '700']
});

export const metadata = {
  title: "Klnwash",
  description: "Klnwash web page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
