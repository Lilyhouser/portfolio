"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import pic1 from "../../asset/project/pic1.png";
import pic2 from "../../asset/project/pic2.png";
import pic3 from "../../asset/project/pic3.jpg";
import pic4 from "../../asset/project/pic4.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const images = [pic1, pic2, pic3, pic4];

export default function Carousel() {
  const ref = useRef<HTMLDivElement>(null);
  const displayImages = [...images, ...images];
  const [index, setIndex] = useState(1);

  const scrollToIndex = (i: number, isSmooth: boolean) => {
    const container = ref.current;
    if (!container) return;

    const child = container.children[i] as HTMLElement;
    if (!child) return;

    const offset =
      child.offsetLeft - container.clientWidth / 2 + child.clientWidth / 2;

    container.scrollTo({
      left: offset,
      behavior: isSmooth ? "smooth" : "instant",
    });
  };

  const next = () => {
    let newIndex = (index + 1) % displayImages.length;
    if (index >= images.length * 1.5 - 1) {
      newIndex = (index + 1) % images.length;
      scrollToIndex(index % images.length, false);
    }
    setIndex(newIndex);
    scrollToIndex(newIndex, true);
  };

  const prev = () => {
    let newIndex = (index - 1) % displayImages.length;
    if (index <= images.length * 0.5) {
      newIndex = ((index - 1) % images.length) + images.length;
      scrollToIndex((index % images.length) + images.length, false);
    }
    setIndex(newIndex);
    scrollToIndex(newIndex, true);
  };

  useEffect(() => {
    scrollToIndex(1, true);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 z-10 absolute top-[50%] left-[50%] translate-[-50%]">
      {/* carousel */}

      <div
        ref={ref}
        className="flex gap-8 overflow-x-scroll scroll-smooth snap-x snap-mandatory w-[70vw]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {displayImages.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt="carousel-img"
            width={700}
            height={600}
            className="rounded-2xl snap-center"
          />
        ))}
      </div>

      {/* buttons */}
      <div className="flex gap-4">
        <button
          className="px-4 flex gap-2 items-center py-2 bg-(--text) rounded cursor-pointer"
          onClick={prev}
        >
          <IoIosArrowBack />
          Prev
        </button>
        <button
          className="px-4 flex gap-2 items-center py-2 bg-(--text) rounded cursor-pointer"
          onClick={next}
        >
          Next
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
