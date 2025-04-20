import { motion } from "framer-motion";

import Link from "next/link";

type props = {
  clickClose: () => void;
  IsModal: boolean;
};

export default function ModalMenu({ clickClose, IsModal }: props) {
  return (
    <motion.section
      initial={IsModal ? { x: 350 } : { x: 0 }}
      animate={IsModal ? { x: 0 } : { x: 350 }}
      transition={{ duration: 0.3 }}
      className="fixed right-0 h-screen w-[350px] bg-neutral-800  border-neutral-500 z-100"
    >
      <ul className="w-full text-neutral-300 flex flex-col text-[18px]">
        <li
          onClick={() => clickClose()}
          className="py-4 w-full cursor-pointer hover:bg-neutral-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="white"
            className="bi bi-x cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </li>
        <Link href={"/"}>
          <li className="py-4 w-full cursor-pointer hover:bg-neutral-900">
            <p className="pl-4">Home</p>
          </li>
        </Link>
        <Link href={"/conta"}>
          <li className="py-4 w-full cursor-pointer hover:bg-neutral-900">
            <p className="pl-4">Conta</p>
          </li>
        </Link>
        <Link href={"/Filmes"}>
          <li className="py-4 w-full cursor-pointer hover:bg-neutral-900">
            <p className="pl-4">Filmes</p>
          </li>
        </Link>
        <Link href={"/Filmes"}>
          <li className="py-4 w-full cursor-pointer hover:bg-neutral-900">
            <p className="pl-4">Series</p>
          </li>
        </Link>
        <Link href={"/MinhaLista"}>
          <li className="py-4 w-full cursor-pointer hover:bg-neutral-900">
            <p className="pl-4">Minha Lista</p>
          </li>
        </Link>
        <Link href={"/Filmes"}>
          <li className="py-4 w-full cursor-pointer hover:bg-neutral-900">
            <p className="pl-4">Conta</p>
          </li>
        </Link>
      </ul>
    </motion.section>
  );
}
