"use client";

import ModalMenu from "@/app/containers/modalMenu";

// next server
import Image from "next/image";
import Link from "next/link";

// react client
import { useState } from "react";

export default function Navegation() {
  const [IsModal, setIsModal] = useState(false);

  function toggleModal() {
    setIsModal(!IsModal);
  }

  return (
    <nav className="w-screen z-50 fixed">
      <ModalMenu IsModal={IsModal} clickClose={toggleModal} />
      <div className="interface2 py-2.5  flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-3xl text-emerald-400 font-light">
            Series<span className="font-black">Fix</span>
          </h1>
        </Link>

        <div className="flex gap-4 items-center">
          <Link href={"/Filmes"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </Link>
          <Image
            width={50}
            height={50}
            priority
            src="/assets/images/eu.jpeg"
            alt=""
            className="h-12 w-12 object-cover rounded-full"
          />
          <svg
            onClick={() => toggleModal()}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="white"
            className="bi bi-list cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}
