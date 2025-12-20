"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { projects } from "@/src/data/data";
import Link from "next/link";

const images = projects.map((item) => item.image);

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
    <div className="flex flex-col items-center gap-4 z-10 absolute top-[50%] left-[50%] translate-[-50%]">
      {/* carousel */}

      <Link
        href={projects[index % images.length].git}
        className="bg-black px-4 py-2 rounded-xl font-bold"
      >
        {projects[index % images.length]?.name || " "}
      </Link>
      <div
        ref={ref}
        className="project-image flex gap-8 overflow-x-scroll scroll-smooth snap-x snap-mandatory w-[70vw]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <>
          {displayImages.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="carousel-img"
              className="rounded-2xl snap-center h-[50vh]"
            />
          ))}
          <div className="tackstack-icons z-10 text-black absolute w-full justify-center">
            <div className="flex gap-4 bg-[#0000006a] hover:bg-white border hover:duration-200 p-4 rounded-2xl">
              {projects[index % images.length].techstack.map((item, index) => (
                <Image
                  width={40}
                  height={40}
                  alt="techstack"
                  key={index}
                  src={item}
                />
              ))}
            </div>
          </div>
        </>
      </div>

      {/* buttons */}
      <div className="w-full flex justify-between">
        <div className="flex text-sm">
          <button
            className="px-4 flex gap-2 items-center py-2 opacity-60 rounded cursor-pointer hover:opacity-100 hover:duration-200"
            onClick={prev}
          >
            <IoIosArrowBack />
            Prev
          </button>
          <button
            className="px-4 flex gap-2 items-center py-2 opacity-60 rounded cursor-pointer hover:opacity-100 hover:duration-200"
            onClick={next}
          >
            Next
            <IoIosArrowForward />
          </button>
        </div>
        <div className="text-sm opacity-60 mr-4">
          Project: {(index % images.length) + 1}/{images.length}
        </div>
      </div>
    </div>
  );
}
