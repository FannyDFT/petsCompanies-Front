import { Inter } from "@next/font/google";
import Image from "next/image";
import Onglet from "../src/Onglet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="w-screen relative">
        <Image src="/assets/dog2.jpg" width={800} height={600} alt="dog" />
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute top-4">
          <Onglet />
        </div>
      </div>
    </div>
  );
}
