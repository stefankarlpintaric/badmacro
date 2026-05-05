import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bad Macro",
  description: "Bad Macro artist identity portal."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
