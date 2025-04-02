import InputPrimary from "../input";

export default function Categorias() {
  return (
    <div className="bg-zinc-950 h-24 flex items-center">
      <div className="interface flex gap-[80px]">
        <ul className="flex justify-between min-w-[60%] text-neutral-400 bold-light text-[18px]">
          <li>Terror</li>
          <li>Comédia</li>
          <li>Romance</li>
          <li>Ação</li>
          <li>Suspense</li>
        </ul>
        <InputPrimary />
      </div>
    </div>
  );
}
