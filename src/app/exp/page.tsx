import Bunny from "@/src/components/common/Bunny";
import TimeLine from "@/src/components/exp/TimeLine";
import Link from "next/link";

const page = () => {
  return (
    <div className="">
      <TimeLine />
      <button className="bottom-button">
        <Link href={"/MyCV.pdf"} download={"LilyCV.pdf"}>
          Click to download my CV
        </Link>
      </button>
      <div className="absolute bottom-20 left-10 opacity-40 -z-10">
        <Bunny w={420} h={420} />
      </div>
    </div>
  );
};

export default page;
