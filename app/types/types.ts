export interface SocialLinks {
  Component: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
  description: string;
}
export type TranslationFunction = (key: string) => string;
export type ImageInfo = {
  src: string;
};
export interface FAQItem {
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: FAQItem[];
}

export interface NavigationItemType {
  name: string;
  href: string;
}
export interface NavigationItemComponentProps {
  navigationItems: NavigationItemType[];
  activeLink: string | null;
  handleNavLinkClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavigationItemType,
  ) => void;
  className: string;
}

export interface NavigationContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export type AdditionalService = {
  name: string;
  price: number;
};
