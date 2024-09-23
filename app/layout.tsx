import Nav from "@/app/components/Nav/Nav";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["greek"] });

export const metadata = {
  title: "Flash news",
  description: "Get the latest flash news"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head>
        <link rel="icon" href='/public/spark.png' />
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={`${inter.className} flex p-8`}>
        <Nav />
        <div className="pl-8 mt-16 w-full">{children}</div>
      </body>
    </html>
  );
}
