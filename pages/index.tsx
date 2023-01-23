import Image from "next/image";
import ButtonCats from "../src/components/ButtonCats";
import ButtonDogs from "../src/components/ButtonDogs";

export default function Home() {
  return (
    <div>
      <div className="w-screen h-screen">
        <Image src="/assets/dog2.jpg" width={800} height={600} alt="dog" />
        <div className="flex justify-center space-x-4 m-10">
          <ButtonDogs />
          <ButtonCats />
        </div>

        <h2 className="slogan"> Tous savoir sur nos meilleurs amis</h2>
      </div>
    </div>
  );
}
