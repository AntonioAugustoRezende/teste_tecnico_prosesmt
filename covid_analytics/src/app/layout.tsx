import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Covid 19 Analytics",
  description: "This project have focus analysis cases Covid 19",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-zinc-50">{children}</body>
    </html>
  );
}
