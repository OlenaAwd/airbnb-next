import Image from "next/legacy/image";
import banner from "../public/assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src={banner}
        alt="banner"
        className=""
        objectFit="cover"
        layout="fill"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-red-700 text-md sm:text-lg font-bold bg-slate-50">
          Not sure where to go? Perfect...
        </p>
        <button className="text-red-700 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 cursor-pointer hover:shadow-xl active:scale-90 transition duration-150">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
