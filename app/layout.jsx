import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: "MamawSensei",
  description: "Your Favorite Manga / Manhwa / Manhua / Webtoon In One Site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} relative`}>
        <NavBar />
        {children}
        {/* <div className="flex items-center justify-center">{modal}</div> */}
        <Footer />
      </body>
    </html>
  );
}
