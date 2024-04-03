import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";
import StoreProvider from "../../redux/store/StoreProvider";
import ProtectedRoute from "../components/Provider/ProtectedRoute";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Roomstay",
  description: "Live where you want",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>
          <ProtectedRoute>{children}</ProtectedRoute>
        </body>
        <Toaster />
      </StoreProvider>
    </html>
  );
}
