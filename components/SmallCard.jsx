import Image from "next/legacy/image";

const SmallCard = ({ image, location, distance }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transform transition duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image
          src={image}
          alt="img"
          className="rounded-lg"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
