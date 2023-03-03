import type { Metadata } from "next";
import Header from "../components/Header";
import "../styles/globals.css";
type LayoutType = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Medium 2.0",
  description: "Welcome to Next.js",
};

export default function RootLayout({ children }: LayoutType) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
