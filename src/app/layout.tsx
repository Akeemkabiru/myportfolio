import type { Metadata } from "next";
import "./globals.css";
import { ViewProvider } from "@/context";

export const metadata: Metadata = {
  title: "KabiruAkeem-Software-Engineer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ViewProvider>
          <main>{children}</main>
        </ViewProvider>
      </body>
    </html>
  );
}
