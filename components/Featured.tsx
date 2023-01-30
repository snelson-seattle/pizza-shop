import { useState } from "react";
import Image from "next/image";

type Props = {};

export default function Featured({}: Props) {
  const [index, setIndex] = useState(0);

  const handleArrowClick = (direction: string): void => {
    if (direction === "left") {
      setIndex(index !== 0 ? index - 1 : index);
    }

    if (direction === "right") {
      setIndex(index !== 2 ? index + 1 : index);
    }
  };

  return (
    <section className="h-[calc(100vh-100px)] bg-red-600 overflow-hidden transition duration-150 ease-in-out">
      <button
        className="absolute top-0 bottom-0 left-0 m-auto w-[100px] h-[100px] z-10 disabled:hidden"
        onClick={() => handleArrowClick("left")}
        disabled={index === 0}
      >
        <Image
          src="/images/arrowl.png"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </button>

      <div className="w-[300vw] h-full">
        <div className="relative w-screen h-full"></div>
      </div>

      <button
        className="absolute top-0 bottom-0 right-0 m-auto w-[100px] h-[100px] z-10 disabled:hidden"
        onClick={() => handleArrowClick("right")}
        disabled={index === 2}
      >
        <Image
          src="/images/arrowr.png"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </button>
    </section>
  );
}
