"use client";

import Filter from "../containers/filter";
import Footer from "../containers/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="min-h-[500px] flex gap-16 pt-30 ">
        <div className="min-h-full">
          <Filter />
        </div>
        {children}
      </section>
      <Footer />
    </>
  );
}
