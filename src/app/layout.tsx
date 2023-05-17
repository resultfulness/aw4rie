import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import ToasterContext from "@/context/ToasterContext";
import AuthorizationContext from "@/context/AuthorizationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aw4rie",
  description: "Aw4rie app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthorizationContext>
          <ToasterContext />
          {children}
        </AuthorizationContext>
      </body>
    </html>
  );
}
