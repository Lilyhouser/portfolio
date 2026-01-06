"use client";
import React, { useState, ReactNode } from "react";
import { ROUTER } from "../router";

interface PageInfo {
  name: string;
  index: number;
}

interface StoreContextType {
  currentPage: PageInfo | undefined;
  handleChangePath: (pageName: string) => void;
  handleGoBack: () => void;
  handleGoNext: () => void;
}

const defaultContextValue: StoreContextType = {
  currentPage: undefined,
  handleChangePath: () => {},
  handleGoBack: () => {},
  handleGoNext: () => {},
};

export const StoreContext =
  React.createContext<StoreContextType>(defaultContextValue);

type Children = {
  children: ReactNode;
};

function StoreProvider({ children }: Children) {
  const [currentPage, setCurrentPage] = useState<PageInfo>({
    name: "about",
    index: 0,
  });

  const handleChangePath = (pageName: string) => {
    const index = ROUTER.findIndex((item) => item.name === pageName);

    if (index < 0) return;

    setCurrentPage({
      name: pageName,
      index,
    });
  };
  const handleGoBack = () => {
    if (!ROUTER[currentPage?.index - 1]) return;
    handleChangePath(ROUTER[currentPage?.index - 1].name);
  };
  const handleGoNext = () => {
    if (!ROUTER[currentPage?.index + 1]) return;
    handleChangePath(ROUTER[currentPage?.index + 1].name);
  };

  return (
    <StoreContext.Provider
      value={{ currentPage, handleChangePath, handleGoBack, handleGoNext }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;
