import { Josefin_Sans} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

const josefin = Josefin_Sans({
  subsets: ["latin"],
});




export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${josefin.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
           <ToastContainer />
           <Toaster />
        </main>
      </body>
    </html>
  );
}
