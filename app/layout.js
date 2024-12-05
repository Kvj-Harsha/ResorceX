import { Inter,Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
// import Header from "./_components/Header";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "ResorceX",
  description: "soon!..",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
                {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
