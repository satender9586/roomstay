import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "../../redux/store/StoreProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Roomstay",
  description: "Live where you want",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>{children}</body>
      </StoreProvider>
    </html>
  );
}
