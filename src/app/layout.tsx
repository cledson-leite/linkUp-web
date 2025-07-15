import type { Metadata } from "next";
import { Gochi_Hand } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs";
import './globals.css'
const gochiHand = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gochi-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LinkUp",
  description: "Uma plataforma de comunicação completa e segura que conecta pessoas de forma rápida e inteligente.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <ClerkProvider>
        <body className={gochiHand.variable}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
