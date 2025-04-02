import Navegation from "./components/navegation";
import Hero from "./containers/hero";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased bg-neutral-200`}>
        <Navegation />
        <Hero />

        {children}
      </body>
    </html>
  );
}
