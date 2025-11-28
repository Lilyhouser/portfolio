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
    </div>
  );
};

export default page;
