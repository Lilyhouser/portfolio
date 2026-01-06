import Carosel from "@/src/components/project/Carosel";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";

const Project = () => {
  return (
    <div className="absolute w-screen h-screen">
      <Carosel />
      <button className="bottom-button">
        <Link
          href={"https://github.com/Lilyhouser"}
          className="flex gap-3 items-center"
          target="_blank"
        >
          <FiGithub />
          https://github.com/Lilyhouser
        </Link>
      </button>
    </div>
  );
};

export default Project;
