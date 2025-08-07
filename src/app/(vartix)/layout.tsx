import type { Metadata } from "next";
import { Manrope, Rock_Salt, IBM_Plex_Mono } from "next/font/google";
import "./globals.scss";
import { CSSProperties } from "react";
import Header from "./components/header/Header";
import Script from "next/script";
import Footer from "./components/footer/Footer";
const m = Manrope({
  subsets: ["latin"],
});

const rs = Rock_Salt({
  weight: "400",
  subsets: ["latin"],
});

const stroke = IBM_Plex_Mono({
  weight: "700",
  subsets: ["latin"],
});

const title = "Vartix";

const description = `
	  We are Vartix, a 3D modeling studio that specializes in creating 3D
            models for VTubers. Our primary focus is in creating 3D models that
            look 2D, ensuring they are as close to their 2D references as
            possible.
`;
const banner =
  "https://shubastore.caprover.venmi.art/api/public/dl/WU-VRzdt?inline=true";
const url = "https://vartix3d.com";

export const metadata: Metadata = {
  title: title,

  metadataBase: new URL(url),

  openGraph: {
    url: url,
    title: title,
    description: description,
    authors: "shubamium",
    images: [banner],
  },
  twitter: {
    title: title,
    card: "summary_large_image",
    images: [banner],
  },
  description: description,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`body`}
        style={
          {
            "--fontm": m.style.fontFamily,
            "--fontrs": rs.style.fontFamily,
            "--fontstroke": stroke.style.fontFamily,
          } as CSSProperties
        }
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
