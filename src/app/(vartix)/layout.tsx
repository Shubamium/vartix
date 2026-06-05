import type { Metadata } from "next";
import { Manrope, Rock_Salt, IBM_Plex_Mono } from "next/font/google";
import "./globals.scss";
import { CSSProperties } from "react";
import Header from "./components/header/Header";
import Script from "next/script";
import Footer from "./components/footer/Footer";
import LoadingScreen from "./components/loading/LoadingScreen";
import CustomCursor from "./components/cusCursor/CustomCursor";
import Analytics from "./components/analytics/Analytics";
const m = Manrope({
  weight: ["400", "500", "600", "700"],
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

const title = "3D Art Studio – Vartix 3D";

const description = `
	 Vartix 3D is an international 3D art studio providing premium creative services to clients worldwide. We create high-quality custom 3D art and fully custom 3D VTuber models from scratch. Every project is unique, and we work closely with our clients to bring their ideas to life with the highest level of quality and care!
`;
const banner =
  "https://shubastore.venmiart.com/api/public/dl/WU-VRzdt?inline=true";
const url = "https://vartix3d.com";

export const revalidate = 60;
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
        <LoadingScreen />
        <Analytics />
        <CustomCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
