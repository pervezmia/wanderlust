import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BsCalendarDay } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";

const DestinationCard = ({ destination }) => {
  const {
    destinationName,
    description,
    category,
    country,
    duration,
    imageUrl,
    _id
  } = destination;
  console.log(destinationName, imageUrl);
  return (
    <div className="card">
      <Image
        alt={destinationName || "alt name"}
        src={
          imageUrl ||
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500"
        }
        width={400}
        height={400}
      />

      <div>
        <div className="flex items-center gap-1">
          <FaLocationDot />
          <span>{country}</span>
        </div>
        <div>
            <div className="font-bold text-xl">{destinationName}</div>

        <div className="flex items-center gap-1">
            <BsCalendarDay />{duration}
        </div>
        </div>

      </div>
      <Link href={`/destinations/${_id}`}><Button variant="ghost" className={'text-cyan-500'}>Book Now {<GoLinkExternal />}</Button></Link>
    </div>
  );
};

export default DestinationCard;
