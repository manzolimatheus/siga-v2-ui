import { Inter } from "next/font/google";
import "../globals.css";

import { Providers } from "../providers";
import GuestOnly from "@/components/guest-only";
import Script from "next/script";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

/**
 * @type {Metadata}
 */
export const metadata = {
  title: "Área do Visitante | Siga Aluno v2.0",
  description: "Siga + React.JS",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Providers>
          <GuestOnly>
            <main className="bg-slate-100">{children}</main>
          </GuestOnly>
        </Providers>
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        />
        <Script
          nomodule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        />
      </body>
    </html>
  );
}
