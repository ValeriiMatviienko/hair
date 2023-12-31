import { ReactNode } from "react";

export type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};
export interface SocialLinks {
  Component: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
  description: string;
}
export type ProductPrice = {
  name: string;
  shortHairPrice: number;
  midHairPrice: number;
  longHairPrice: number;
};
export type TranslationFunction = (key: string) => string;
export interface DrawerProps {
  children: ReactNode;
}
export type ImageInfo = {
  src: string;
  alt: string;
  className?: string;
};
export interface SliderProps {
  images: ImageInfo[];
}
export interface InputType {
  nameInput: string;
  numberInput: string;
  descriptionInput: string;
}
export interface ToggleModalProps {
  open: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export interface FAQItem {
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: FAQItem[];
}

export type BenefitData = {
  title: string;
  benefits: {
    subtitle: string;
    description: string;
  }[];
};
export interface serviceDataType {
  serviceTitle: string;
  serviceDescription: string;
}
export interface NavigationItemType {
  name: string;
  href: string;
}
export type GenerateMetadataParams = {
  params: {
    locale: string;
  };
};
export type LanguageSelectorProps = {
  id: string;
};
export interface NavigationItemComponentProps {
  navigationItems: NavigationItemType[];
  activeLink: string | null;
  handleNavLinkClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavigationItemType
  ) => void;
  className: string;
}
export type ContactButtonProps = {
  onClick: (e: React.MouseEvent) => void;
  className?: string;
};
export interface NavigationContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isContactFormOpen: boolean;
  setIsContactFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ToastProviderProps {
  children: React.ReactNode;
}
