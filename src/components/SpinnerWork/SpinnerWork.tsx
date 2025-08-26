import { routeKeys } from "@/i18n/routing";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

export default function SpinnerWork() {
  return (
    <div className="mx-auto xl:mx-0 relative z-50">
      <Link
        href={routeKeys.work}
        className="relative w-[130px] h-[130px] md:w-[160px] md:h-[160px] flex justify-center items-center
         circle-star group"
      >
        <Image
          src={"/homepage/rounded-text.png"}
          width={100}
          height={100}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[100px] max-h-[100px] md:max-w-[120px] md:max-h-[120px]"
        />
        <HiArrowRight
          className="absolute text-4xl md:text-5xl transform transition-transform group-hover:translate-x-3 group-hover:text-[#B88900] duration-300"
        />
      </Link>
    </div>
  );
}