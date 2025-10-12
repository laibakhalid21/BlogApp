import Image from "next/image";
import Button from "@/components/button/button";

export default function Home() {
  return (
    <section className="w-full flex justify-center">
      <div className="grid items-center md:grid-cols-2 grid-cols-1 max-w-[1400px] gap-[100px] px-6 md:px-12 py-16">

        <div className="flex flex-col gap-[50px] text-center md:text-left">
          <h1 className="text-[52px] lg:text-[72px] font-bold leading-tight bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent">
            Better design for your digital products
          </h1>

          <p className="text-[18px] md:text-[24px] font-light text-white dark:text-gray-300">
            Turning your idea into reality. We bring together the teams from the global tech industry.
          </p>

          <Button text="See our Works" url="/portfolio" />

        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/hero.png"
            alt="Illustration representing digital product design"
            width={500}
            height={500}
            className="w-full max-w-[500px] h-auto object-contain
            animate-move"
            priority
          />
        </div>
      </div>
    
    </section>
  );
}
