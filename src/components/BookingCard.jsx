"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const BookingCard = ({ destination }) => {
  const [departureDate, setDepartureDate] = useState(null);
  // console.log(new Date(departureDate));

  const { data: session } = authClient.useSession();
  // console.log(session);
  const user = session?.user;

  const {
    _id,
    destinationName,
    country,
    price,
    imageUrl,
  } = destination;

  const handleBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: new Date(departureDate),
    }
    // console.log(bookingData);

    const res = await fetch("http://localhost:5000/booking", {
      method: "POST", 
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(bookingData)
    })
    const data = await res.json();
    console.log(data);
    toast.success("You booked successfully!")
  }
  return (
    <Card className="rounded-none border-gray-200 border-4">
      <h2 className="text-sm text-[#6C696D]">Starting from</h2>
      <p className="font-bold text-3xl text-cyan-500">${price}</p>
      <p className="text-sm text-[#6C696D]">per person</p>
      <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
        <Label className="font-bold text-[#6C696D]">Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>
      <Button onClick={handleBooking} className={"w-full rounded-none"}>Book Now</Button>
    </Card>
  );
};

export default BookingCard;
