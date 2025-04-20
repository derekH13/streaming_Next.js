import ButtonSecundary from "./buttonSecundary";
import Link from "next/link";

type props = {
  onclick: () => void;
};

export default function ModalRegistrar({ onclick }: props) {
  return (
    <div className="fixed top-0 z-50 left-0 backdrop-blur-[10px] flex justify-center items-center h-screen w-screen">
      <div className="w-[400px]  bg-neutral-100 p-10 rounded-2xl">
        <p className="text-neutral-900 text-xl">
          Para adicionar filmes á sua lista é necessario ter o login
        </p>
        <div>
          <Link href={"/conta"}>
            <ButtonSecundary bgTransparent={false} onclick={onclick}>
              Fazer o cadastro
            </ButtonSecundary>
          </Link>
          <ButtonSecundary bgTransparent={true} onclick={onclick}>
            Não fazer
          </ButtonSecundary>
        </div>
      </div>
    </div>
  );
}
