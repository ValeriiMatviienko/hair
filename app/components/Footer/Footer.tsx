import { SocialLinks } from "@/app/types/types";
import { FacebookIcon, InstagramIcon } from "@/public/images/Footer/icons";

const socialLinks: SocialLinks[] = [
  {
    Component: FacebookIcon,
    link: "https://facebook.com",
    description: "Facebook",
  },
  {
    Component: InstagramIcon,
    link: "https://instagram.com/hair.by.hanna.wroclaw",
    description: "Instagram",
  },
];
const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <div className="max-w-2xl px-4 pt-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 my-12 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
        <div className="sm:col-span-6 ">
          <div className="flex gap-4">
            {socialLinks.map((item, i) => (
              <div key={i} className="flex flex-col items-center mx-3">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="w-16 h-16 text-base  rounded-full shadow-xl flex items-center justify-center">
                    <item.Component className={`w-full h-full  `} />
                  </div>
                </a>
                <p className="mt-2 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="sm:col-span-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.35689438791!2d17.054840199999997!3d51.0834207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc2ed9db2820d%3A0x600a19542516804!2zYWxlamEgQXJtaWkgS3Jham93ZWogNDgsIDUwLTUwNSBXcm9jxYJhdywg0J_QvtC70YzRidCw!5e0!3m2!1suk!2sde!4v1695216454566!5m2!1suk!2sde"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="items-center justify-between py-10 border-t md:flex border-t-bordertop">
        <h4 className="text-base font-normal text-center text-darkgrey md:text-start">
          &quot;Copyright &copy; {currentYear} Hair by Hanna. All rights
          reserved.&quot;
        </h4>
      </div>
    </div>
  );
};

export default Footer;
