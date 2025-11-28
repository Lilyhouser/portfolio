import Carosel from "@/src/components/project/Carosel";
import { FiGithub } from "react-icons/fi";

const page = () => {
  return (
    <div>
      <Carosel />
      <button className="bottom-button">
        <FiGithub />
        https://github.com
      </button>
    </div>
  );
};

export default page;
