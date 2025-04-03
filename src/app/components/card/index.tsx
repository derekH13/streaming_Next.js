import Image from "next/image";
import React from "react";

export default function Card() {
  return (
    <div className="text-center">
      <Image
        height={300}
        width={200}
        src="/assets/images/eu.jpeg"
        alt=""
        className="rounded-[5px]"
      />
      <h6 className="text-neutral-200 font-medium pt-1.5">DeadPool</h6>
    </div>
  );
}
