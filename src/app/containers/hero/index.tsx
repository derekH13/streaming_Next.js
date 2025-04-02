import ButtonHero from "@/app/components/buttonHero";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-[800px] relative">
      <Image
        width={2369}
        height={953}
        priority
        src="/assets/images/hero.png"
        alt=""
        className="h-full w-full object-cover object-top z-0 absolute"
      />
      <div className="interface ">
        <div className="pt-52 relative z-10 max-w-[440px] flex flex-col ">
          <Image
            width={300}
            height={100}
            priority
            src="/assets/images/logoTheWither.png"
            alt=""
            className="w-full "
          />

          <div className="flex gap-2 pb-6">
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
          </div>
          <ButtonHero />
          <p className="text-neutral-400 font-extralight pt-2">
            Claro, aquí tienes un texto aleatorio: El sol comenzaba a esconderse
            detrás de las montañas, pintando el cielo con tonos anaranjados y
            rojos. En el pequeño pueblo, las luces de las casas se encendían una
            a una, como si de un faro de esperanza se tratara.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
