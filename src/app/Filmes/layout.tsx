"use client";

import Filter from "../containers/filter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="min-h-[500px] flex flex-col-reverse md:flex-row gap-16 pt-30 ">
        <div className="min-h-full ">
          <Filter />
        </div>
        {children}
      </section>
    </>
  );
}
