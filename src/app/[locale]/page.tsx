import SpinnerWork from "@/components/SpinnerWork/SpinnerWork";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <div className="min-h-screen grid grid-cols-2 place-items-center">
        <div className="text-white text-left xl:px-26">
          <h1 className="text-white text-2xl font-extrabold leading-tight md:text-5xl mb-4">
            Transforming Ideas <br /> Into{" "}
            <span className="text-[#B88900]">Digital Reality </span>
          </h1>
          <div className="flex flex-col gap-2">
            <p className="text-white/80 text-sm md:text-lg font-light">
              Combining creativity with precision, I craft digital solutions that are not only functional but truly impactful.
            </p>
            <p className="text-white/80 text-sm md:text-lg font-light">
              If you’re looking for someone committed to quality, collaboration, and results, let’s work together.
            </p>
          </div>    
        </div>
        <div>
          <Image
            src="/logo.svg"
            alt="Developer Illustration"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
      </div>
      <div className="fixed inset-0 flex items-end justify-center md:justify-end pb-10 px-10">
        <SpinnerWork />
      </div>
    </div>
  );
}
