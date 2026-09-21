"use client";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { NavigationContextType } from "../types/types";

const NavigationContext = createContext<NavigationContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export const useNavigationContext = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const contextValue = {
    isOpen,
    setIsOpen,
  };

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
};
