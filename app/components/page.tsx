import React from 'react';
import Image from 'next/image';

function Car({ carImage , carName, carPrice, carReviews }:any) {
  return (
    <div>
      <Image src={carImage} alt="picture" height={250} width={250}></Image>
      <h2>{carName}</h2>
      <p>Price: {carPrice}</p>
      <p>Reviews: {carReviews}</p>
    </div>
  );
}

export default Car;
