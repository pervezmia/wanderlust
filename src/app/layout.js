import { Josefin_Sans} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

const josefin = Josefin_Sans({
  subsets: ["latin"],
});


export const metadata = {
  title: "Ahmed Pervez Kabir | Full-Stack Web Developer",
  description: "Full-stack developer building Next.js, Express.js and MongoDB applications. See live projects including TutorBooking, Mentora, and Wanderlust.",
  keywords: ["Ahmed Pervez Kabir", "Pervez Mia", "full stack developer Bangladesh", "Next.js developer"],
  openGraph: {
    title: "Ahmed Pervez Kabir | Full-Stack Developer",
    description: "Full-stack developer building production-ready apps with Next.js, Express.js, and MongoDB. See live projects and source code.",
    url: "https://portfolio-gray-one-armotgwq0e.vercel.app",
    images: ["/og-image.png"],
  },
};

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
