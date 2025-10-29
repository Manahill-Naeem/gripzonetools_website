import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GripZone Tools",
  description: "Machinery and mechanical tools — site upgrading soon.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


