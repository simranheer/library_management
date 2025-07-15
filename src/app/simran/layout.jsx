import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AdminRouteProtect from "../../components/adminProtected"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "library Management",
  description: "summer project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AdminRouteProtect>
        {children}
        </AdminRouteProtect>
      </body>
    </html>
  );
}