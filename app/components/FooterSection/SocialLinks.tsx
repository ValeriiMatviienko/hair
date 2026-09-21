import { SocialLinks } from "@/app/types/types";
import TikTokIcon, {
  FacebookIcon,
  InstagramIcon,
} from "@/public/images/Footer/icons";
import { siteConfig } from "@/lib/site-config";

export const socialLinks: SocialLinks[] = [
  {
    Component: FacebookIcon,
    link: siteConfig.social.facebook,
    description: "Facebook",
  },
  {
    Component: InstagramIcon,
    link: siteConfig.social.instagram,
    description: "Instagram",
  },
  {
    Component: TikTokIcon,
    link: siteConfig.social.tiktok,
    description: "TikTok",
  },
];
