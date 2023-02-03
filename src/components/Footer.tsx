import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-primary h-28 w-screen flex justify-center items-center relative">
      <div>
        <div className="flex">
          <Link href="/cats">
            <Image
              src="/assets/chat.png"
              width={55}
              height={55}
              alt="catClick"
            />
          </Link>
          <Link href="/dogs">
            <Image
              src="/assets/chien.png"
              width={55}
              height={55}
              alt="dogClick"
            />
          </Link>
        </div>
      </div>
      <Link href="#top" onClick={() => (window.location.href = "#top")}>
        <Image
          className="absolute right-6 bottom-6"
          src="/assets/goUp.png"
          width={55}
          height={55}
          alt="goUp"
        />
      </Link>
    </div>
  );
}
