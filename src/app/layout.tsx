import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import './global.scss';
import { Nunito } from "next/font/google"

const nunito = Nunito({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Stories",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
          <Header />
          {children}
      </body>
    </html>
  );
}
