import { SocialLinks } from "@/app/types/types";
import TikTokIcon, {
  FacebookIcon,
  InstagramIcon,
} from "@/public/images/Footer/icons";

export const socialLinks: SocialLinks[] = [
  {
    Component: FacebookIcon,
    link: "https://facebook.com/matvienko.hanna",
    description: "Facebook",
  },
  {
    Component: InstagramIcon,
    link: "https://instagram.com/hair.by.hanna.wroclaw",
    description: "Instagram",
  },
  {
    Component: TikTokIcon,
    link: "https://www.tiktok.com/@hair.by.hanna?_t=8hRRAiMGYoT&_r=1",
    description: "TikTok",
  },
];
