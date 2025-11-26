"use client";
import React, { useState, ReactNode, useEffect } from "react";
import { ISideBarItem } from "../types";
import { usePathname } from "next/navigation";
import { ROUTER } from "../router";

interface PageInfo {
  name: string;
  index: number;
}

interface StoreContextType {
  currentPage: PageInfo | undefined;
  setCurrentPage: React.Dispatch<React.SetStateAction<PageInfo | undefined>>;
  handleChangePath: (pageName: string) => void;
}

const defaultContextValue: StoreContextType = {
  currentPage: undefined,
  setCurrentPage: () => {
    throw new Error("setCurrentPage must be used within a StoreProvider");
  },
  handleChangePath: () => {},
};

export const StoreContext =
  React.createContext<StoreContextType>(defaultContextValue);

type Children = {
  children: ReactNode;
};

function StoreProvider({ children }: Children) {
  const pathname = usePathname().split("/")[1];
  const initIndex = ROUTER.findIndex(
    (item: ISideBarItem) => item.name === pathname
  );
  const [currentPage, setCurrentPage] = useState<PageInfo | undefined>({
    name: pathname.length === 0 ? "about" : pathname,
    index: initIndex,
  });

  const handleChangePath = (pageName) => {
    setCurrentPage({
      name: pageName,
      index: ROUTER.findIndex((item) => item.name === pageName),
    });
  };

  return (
    <StoreContext.Provider
      value={{ currentPage, setCurrentPage, handleChangePath }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;
