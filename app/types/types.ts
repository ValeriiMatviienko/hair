import { ReactNode } from "react";

export interface cardDataType {
  heading: string;
  subheading: string;
}
export interface SocialLinks {
  imgSrc: string;
  link: string;
  width: number;
}
export interface Product {
  name: string;
  price: number;
}
export interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}
export interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}
export interface DrowerDataProps {
  setIsContactFormOpen: (isOpen: boolean) => void;
}
export interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setIsContactFormOpen: (isOpen: boolean) => void;
}
export interface ContactFormProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
