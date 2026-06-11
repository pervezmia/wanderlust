import BookingCard from "@/components/BookingCard";
import { DeleteAlert } from "@/components/DeleteAlert";
import EditModal from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { BsCalendarDay } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";


const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const {token} = await auth.api.getToken({
    headers: await headers()
  })
  console.log(token);

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`,{
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  const destination = await res.json();

  const {
    destinationName,
    description,
    category,
    country,
    duration,
    imageUrl,
  } = destination;

  console.log(destinationName, imageUrl);
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 py-4 space-y-2.5">
      <div className="space-y-2.5">
        <div className="flex justify-between items-center">
          <Link href={"/destinations"} className="">
            <Button variant="secondary">
              <GoArrowLeft /> Back to destination
            </Button>
          </Link>
          <div className="flex gap-2.5">
            {/* edit btn */}
            <EditModal destination={destination}></EditModal>
            <DeleteAlert destination={destination}></DeleteAlert>

            {/* <Button variant="secondary">
                 <RxUpdate /> Update 
              </Button> */}
          </div>
        </div>
        <Image
          alt={destinationName}
          src={imageUrl}
          height={500}
          width={800}
          className="w-full h-100 rounded-lg object-cover"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex-2">
          <div className="flex items-center gap-1">
            <FaLocationDot />
            <span>{country}</span>
          </div>
          <div>
            <div className="font-bold text-xl">{destinationName}</div>

            <div className="flex items-center gap-1">
              <BsCalendarDay />
              {duration}
            </div>
          </div>
          <h2 className="font-bold">Over View</h2>
          <p>{description}</p>
        </div>
        <BookingCard destination={destination}></BookingCard>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
