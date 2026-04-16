import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import BackgroundParticles from "@/components/BackgroundParticles";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  title: "Prashant Sharma | Full Stack Developer",
  description: "Portfolio of Prashant Sharma, a passionate Full Stack Developer specializing in React, Next.js, and Node.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-primary text-slate-300 selection:bg-accent selection:text-white overflow-x-hidden bg-grain`}>
        <BackgroundParticles />
        <ScrollProgress />
        <CustomCursor />
        <BackToTop />
        <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#4f46e51a,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#818cf80a,transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#6366f10a,transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#4f46e505,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#818cf805,transparent_50%)]"></div>
        </div>
        
        <div className="relative min-h-screen flex flex-col container mx-auto px-4 lg:px-12">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <footer className="py-10 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Prashant Sharma. Build with Next.js & Tailwind.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
