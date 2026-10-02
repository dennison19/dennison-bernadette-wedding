import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import ThemeRegistry from "./theme-registry";

export const metadata: Metadata = {
  title: "Dennison & Bernadette | Wedding Invitation",
  description: "A champagne gold wedding invitation.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
