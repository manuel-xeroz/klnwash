import Navbar from "@/components/UI/Navbar/Navbar";
import "./globals.scss";
import { Poppins } from "next/font/google";
import Footer from "@/components/UI/Footer/Footer";

export const metadata = {
  title: "Klnwash",
  description: "Klnwash web page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
