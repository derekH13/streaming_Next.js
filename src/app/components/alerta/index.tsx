type props = {
  title: string;
  texto: string;
  colorVerde: boolean;
};

export default function Alerta({ title, texto, colorVerde }: props) {
  return (
    <div
      className={`fixed rounded-xl bg-emerald-100 flex flex-col gap-2 z-30 top-[78px] right-[10px] w-[190px] md:w-[230px] p-4 border-3 ${
        colorVerde ? "border-emerald-700" : "border-red-700"
      }`}
    >
      <h6 className="text-emerald-700 text-xl">{title}</h6>
      <p className="text-[15px]">{texto}</p>
    </div>
  );
}
