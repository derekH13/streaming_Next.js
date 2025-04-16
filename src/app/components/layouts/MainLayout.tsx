"use client";

import "../../globals.css";

import { ReactNode } from "react";

import { Provider } from "react-redux";
import store from "@/app/redux/store";

type props = {
  children: ReactNode;
};

export default function MainLayout({ children }: props) {
  return (
    <Provider store={store}>
      <section className={`antialiased bg-stone-950`}>
        <section className="min-h-screen">{children}</section>
      </section>
    </Provider>
  );
}
