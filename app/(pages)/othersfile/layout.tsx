export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="border-2 border-red-400 bg-black">{children}</body>
    </html>
  );
}
