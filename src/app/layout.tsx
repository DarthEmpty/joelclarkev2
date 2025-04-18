import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar";

const metadata: Metadata = {
  title: "Joel Clarke",
  description: "Welcome to my corner of the internet",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={"font-sans bg-primary"}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

export { RootLayout as default, metadata };
