import Image from "next/image";
import { Cat } from "../types/globalTypes";

type Props = { cat: Cat };

function CardCats({ cat }: Props) {
  return <div className="h-screen bg-primary"></div>;
}

export default CardCats;
