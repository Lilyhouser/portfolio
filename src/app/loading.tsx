import { VscLoading } from "react-icons/vsc";

const loading = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <VscLoading className="animate-spin" />
    </div>
  );
};

export default loading;
