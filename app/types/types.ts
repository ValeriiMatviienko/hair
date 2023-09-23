import { ReactNode } from "react";

export interface serviceDataType {
  serviceTitle: string;
  serviceDescription: string;
}
export interface SocialLinks {
  Component: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
  description: string;
}
export interface ProductPrice {
  name: string;
  price: number;
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
  // setIsContactFormOpen: (isOpen: boolean) => void;
}
export interface ContactFormProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export type ImageInfo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};
