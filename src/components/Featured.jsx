import React from "react";
import DestinationCard from "./DestinationCard";

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
  const features = await res.json();
  console.log(features);
  return (
    <div className="max-w-7xl mx-auto mt-10 p-5 ">
        <h1 className="text-3xl font-bold">Featured Destination</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {features.map((feature) => (
          <DestinationCard
            key={feature._id}
            destination={feature}
          ></DestinationCard>
        ))}
      </div>
    </div>
  );
};

export default Featured;
