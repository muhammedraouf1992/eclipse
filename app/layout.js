import "./globals.css";

import { Exo_2 } from "next/font/google";

const exo = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo",
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
      <body className={`${exo.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
