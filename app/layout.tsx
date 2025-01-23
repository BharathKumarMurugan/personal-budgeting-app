import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Budgeting App",
  description: "Your personal budgeting app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={lato.className}>
          {/* Header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          {/* Footer */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto text-center text-gray-600 text-xs">
              <p>Bharath Kumar Murugan</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
