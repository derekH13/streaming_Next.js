"use client";

export default function ButtonHero() {
  return (
    <div className="flex w-[200px] h-16 rounded-[8px] overflow-hidden hover:scale-[0.98] transition-all duration-[.4s]">
      <button className=" btn-primary bg-emerald-900 w-full h-full flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          className="bi bi-play-fill "
          viewBox="0 0 16 16"
        >
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
        </svg>
      </button>
      <button className="btn-primary bg-emerald-300 w-full h-full flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          stroke="white" // Define a cor do traço
          strokeWidth="1" // Aumenta a espessura da linha
          className="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
        </svg>
      </button>
    </div>
  );
}
