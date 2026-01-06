import TimeLine from "@/src/components/exp/TimeLine";
import Link from "next/link";

const Exp = () => {
  return (
    <div className="absolute w-screen h-screen">
      <TimeLine />
      <button className="bottom-button">
        <Link href={"/MyCV.pdf"} download={"LilyCV.pdf"}>
          Click to download my CV
        </Link>
      </button>
    </div>
  );
};

export default Exp;
