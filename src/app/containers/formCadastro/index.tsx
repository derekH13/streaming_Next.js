import Alerta from "@/app/components/alerta";
import ButtonSecundary from "@/app/components/buttonSecundary";
import InputPrimary from "@/app/components/input";
import { Cadastro, Logar } from "@/app/conta/actions";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

const initialState = {
  success: false,
  message: "",
  token: "",
};

type props = {
  login?: boolean;
  onclickCadastro: () => void;
  onclickLogin: () => void;
};

export default function FormCadastro({
  login,
  onclickCadastro,
  onclickLogin,
}: props) {
  const [state, formAction] = useFormState(Cadastro, initialState);
  const [state2, formAction2] = useFormState(Logar, initialState);

  const [alerta, setAlerta] = useState(false);

  useEffect(() => {
    if (state.success) {
      setAlerta(true);

      setTimeout(() => {
        setAlerta(false);
      }, 8000);
    }

    if (state2.success && state2.token && state2.username) {
      localStorage.setItem("token", state2.token);
      localStorage.setItem("name", state2.username);
      redirect("/");
    }
  }, [state.message || state2.message]);

  return (
    <>
      {alerta && (
        <Alerta
          colorVerde={true}
          texto="Cadastro feito com sucesso, agora faça o login"
          title="Bem vendo"
        />
      )}
      <form
        action={login ? formAction2 : formAction}
        className="flex flex-col max-w-[600px] w-[97%] bg-neutral-200 p-10 rounded-2xl"
      >
        <h1 className="text-4xl text-center text-emerald-500 font-light pb-4">
          Series<span className="font-black">Fix</span>
        </h1>
        <div>
          <p className="text-neutral-900 font-light pt-4 pb-1">
            Nome de usuario
          </p>
          <InputPrimary
            bgColor="bg-neutral-300"
            notButton={true}
            placeholder="Nome"
            name="nome"
          />
          <p className="text-neutral-900 font-light pt-4 pb-1">E-mail</p>
          <InputPrimary
            name="email"
            bgColor="bg-neutral-300"
            notButton={true}
            placeholder="E-mail que mais usa"
          />

          <p className="text-neutral-900 font-light pt-4 pb-1">Senha</p>
          <InputPrimary
            name="senha"
            bgColor="bg-neutral-300"
            notButton={true}
            placeholder="Senha"
          />
          {!login && (
            <>
              <p className="text-neutral-900 font-light pt-4 pb-1">
                Repetir á senha
              </p>
              <InputPrimary
                name="rSenha"
                bgColor="bg-neutral-300"
                notButton={true}
                placeholder="Repita a mesma senha "
              />
            </>
          )}

          {state.message && (
            <p className={state.success ? "text-green-600" : "text-red-600"}>
              {state.message}
            </p>
          )}

          {state2.message && (
            <p className={state2.success ? "text-green-600" : "text-red-600"}>
              {state2.message}
            </p>
          )}

          <div
            className={`pt-4 flex  ${login ? "flex-col-reverse" : "flex-col"}`}
          >
            <ButtonSecundary
              type={login ? "button" : "submit"}
              onclick={onclickCadastro}
              bgTransparent={false}
            >
              Cadastrar
            </ButtonSecundary>
            <ButtonSecundary
              type={login ? "submit" : "button"}
              onclick={onclickLogin}
              bgTransparent={true}
            >
              Logar
            </ButtonSecundary>
          </div>
        </div>
      </form>
    </>
  );
}
