import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";
const ppNeue = localFont({ src: "../../public/fonts/ppneue.woff2" });

export const metadata: Metadata = {
  title: "Ultra Agency",
  description: "Digital creative agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ppNeue.className}>{children}</body>
    </html>
  );
}
