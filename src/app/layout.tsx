"use client";

import { Provider } from "react-redux";
import Navegation from "./components/navegation";
import Footer from "./containers/footer";

import "./globals.css";
import store from "./redux/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="pt-br">
        <body className={`antialiased bg-stone-950`}>
          <Navegation />

          <section className="min-h-screen">{children}</section>

          <Footer />
        </body>
      </html>
    </Provider>
  );
}
