import { Inter } from "next/font/google";
import "../globals.css";

// Providers
import { Providers } from "../providers";

// Components
import AuthOnly from "@/components/auth-only";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Área do Aluno | Siga Aluno v2.0",
  description: "Siga + React",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers>
          <AuthOnly>
            <div className="flex flex-col h-full overflow-hidden">
              <main className="bg-slate-100 h-[90vh] mb-[10vh] overflow-y-auto">
                {children}
              </main>
              <div className="h-[10vh] mt-[90vh] fixed w-full">
                <Footer />
              </div>
            </div>
          </AuthOnly>
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
