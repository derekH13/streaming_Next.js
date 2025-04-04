import Navegation from "./components/navegation";
import Footer from "./containers/footer";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased bg-stone-950`}>
        <Navegation />

        {children}

        <Footer />
      </body>
    </html>
  );
}
