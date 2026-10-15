import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/navBar";
import NavLinks from "@/components/shared/navLinks";
import Marquee from "@/components/shared/marquee";
import { Anek_Bangla } from "next/font/google";
import Footer from "@/components/shared/footer";
import { Toaster } from "react-hot-toast";

const anekBangla = Anek_Bangla({
  subsets: ["bengali", "latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "নিত্যপ্রয়োজনীয় পণ্যের বাজার দর",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anekBangla.className}} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <NavLinks></NavLinks>
        <Marquee></Marquee>
        {children}
        <Footer></Footer>
        <Toaster position="top-center" reverseOrder={false}/>


      </body>
    </html>
  );
}
