"use client";
import { StoreContext } from "@/src/context";
import { ROUTER } from "@/src/router";
import Link from "next/link";
import { useContext } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Sidebar = () => {
  const { currentPage, setCurrentPage } = useContext(StoreContext);

  return (
    <>
      <aside className="Sidebar z-10">
        <ul className="Sidebar-list">
          {ROUTER.map((item, index) => (
            <li
              key={item.name}
              onClick={() => setCurrentPage({ name: item.name, index })}
            >
              <Link
                className={`Sidebar-item ${
                  !!currentPage && item.name === currentPage.name
                    ? "Sidebar-item-select"
                    : ""
                }`}
                href={item.url}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      {!!currentPage && currentPage?.index < 3 && (
        <button
          onClick={() =>
            setCurrentPage((prev) => {
              if (!prev) return;
              return {
                name: ROUTER[prev.index + 1].name,
                index: prev.index + 1,
              };
            })
          }
          className="fixed right-16 top-[45vh] z-1 bg-[#111] rounded-full p-2 opacity-50 hover:opacity-100 cursor-pointer hover:duration-200"
        >
          <Link href={ROUTER[currentPage.index + 1].url}>
            <IoIosArrowRoundForward size={28} />
          </Link>
        </button>
      )}
      {!!currentPage && currentPage?.index > 0 && (
        <button
          onClick={() =>
            setCurrentPage((prev) => {
              if (!prev) return;
              return {
                name: ROUTER[prev.index - 1].name,
                index: prev.index - 1,
              };
            })
          }
          className="fixed left-16 top-[45vh] z-1 bg-[#111] rounded-full p-2 opacity-50 hover:opacity-100 cursor-pointer hover:duration-200"
        >
          <Link href={ROUTER[currentPage.index - 1].url}>
            <IoIosArrowRoundBack size={28} />
          </Link>
        </button>
      )}
    </>
  );
};

export default Sidebar;
