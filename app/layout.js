import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";


import Whatsapp from "@/components/Whatsapp";

// Roboto
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Poppins
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: " Plastic Garbage Bag Manufacturer & Bulk Supplier | Sangam Plastic Industries",
  description:
    "Premium Quality Garbage Bags for Reliable Waste Management – Durable, Eco-Friendly & Bulk Supplies from Leading Manufacturer Since 1988.",
   icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (


    <html lang="en">


<head>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

</head>


  

      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
     
    <Whatsapp/>
        <LayoutWrapper>
        
      
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
