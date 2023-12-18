"use client";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

interface NavigationContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isContactFormOpen: boolean;
  setIsContactFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationContext = createContext<NavigationContextType>({
  isOpen: false,
  setIsOpen: () => {},
  isContactFormOpen: false,
  setIsContactFormOpen: () => {},
});

export const useNavigationContext = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState<boolean>(false);

  const contextValue = {
    isOpen,
    setIsOpen,
    isContactFormOpen,
    setIsContactFormOpen,
  };

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
};
