import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;
  // console.log(user);

  const res = await fetch(`http://localhost:5000/booking/${user?.id}`);

  const bookings = await res.json();
  console.log(bookings);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center mt-4">My bookings </h1>
      <div className="flex flex-col items-center min-w-3xl space-y-3 mt-3 mb-3">
        {bookings.map((booking) => (
          <div key={booking._id} className="">
            <div className=" min-w-3xl border-2 border-gray-300 p-2 flex gap-5">
              <Image
                src={booking.imageUrl}
                alt={booking.destinationName}
                height={200}
                width={200}
              />
              <div className="space-y-1">
                <h2 className="font-bold text-2xl">{booking.destinationName}</h2>
                <p>
                    {
                        new Date (booking.departureDate).toLocaleDateString("en-us", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })
                    }
                </p>
                <p>Booking Id: {booking._id}</p>
                <h2 className="font-bold text-4xl text-cyan-500">${booking.price}</h2>
                <BookingCancelAlert bookingId={booking._id}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingsPage;
