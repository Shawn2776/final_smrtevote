import { GoogleAnalytics } from "@next/third-parties/google";

import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });

export const metadata = {
  title: "SMRTeVote",
  description:
    "SMRTeVote is a versatile online voting platform suitable for colleges, universities, businesses, and individuals. Our platform offers a secure and intuitive way to conduct various types of elections and polls. Whether you're managing a large-scale university election or a small business decision, SMRTeVote streamlines the voting process, ensures data security, and promotes engagement among participants.",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-1Q7ZFN5YPM" />
    </html>
  );
}
