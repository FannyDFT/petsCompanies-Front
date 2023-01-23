import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-primary h-28 w-screen flex justify-center items-center relative">
      <div>
        <div className="flex">
          <Image src="/assets/chat.png" width={55} height={55} alt="catClick" />
          <Image
            src="/assets/chien.png"
            width={55}
            height={55}
            alt="dogClick"
          />
        </div>
      </div>
      <Image
        className="absolute right-4"
        src="/assets/goUp.png"
        width={55}
        height={55}
        alt="goUp"
      />
    </div>
  );
}
