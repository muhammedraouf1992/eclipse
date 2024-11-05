import "./globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "700"],
});
export const metadata = {
  title: "Eclipse",
  description:
    "Eclipse Ad Agency in Riyadh delivers customized marketing solutions to help businesses achieve their goals with trusted and innovative advertising strategies. Contact Now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${plusJakarta.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
