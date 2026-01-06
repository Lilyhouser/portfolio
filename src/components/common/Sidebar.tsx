"use client";
import { StoreContext } from "@/src/context";
import { ROUTER } from "@/src/router";
import { useContext, useEffect } from "react";

const Sidebar = () => {
  const { currentPage, handleChangePath, handleGoBack, handleGoNext } =
    useContext(StoreContext);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handleGoBack();
      } else if (e.key == "ArrowRight") {
        e.preventDefault();
        handleGoNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleGoBack, handleGoNext]);

  return (
    <aside className="Sidebar z-100">
      <ul className="Sidebar-list">
        {ROUTER.map((item) => (
          <li key={item.name} onClick={() => handleChangePath(item.name)}>
            <div
              className={`Sidebar-item ${
                !!currentPage && item.name === currentPage.name
                  ? "Sidebar-item-select"
                  : ""
              }`}
            >
              {item.name}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
