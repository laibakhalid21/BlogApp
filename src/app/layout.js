import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/header";
import { ThemeProvider } from "@/context/themeContext";
import AuthProvider from "@/components/authprovider/authprovider";
import Footer from "@/components/footer/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Laiba Khalid",
  description: "This is full stack blog application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <AuthProvider>
                      <Navbar />
                      {children}
                      <Footer/>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
