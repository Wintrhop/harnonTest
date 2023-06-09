import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { Poppins } from "next/font/google";
import stylesApp from "./page.module.css";
import NavBr from "@/Components/NavBr";
import { ContextLoggedProvider } from "@/context/context";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--poppins-font",
});

export const metadata = {
  title: "Harnon test",
  description: "Generated by create next app",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        
        <ContextLoggedProvider>
        <NavBr />
          <main className={stylesApp.main}>{children}</main>
        </ContextLoggedProvider>
      </body>
    </html>
  );
}
