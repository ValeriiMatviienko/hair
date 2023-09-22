import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "@/app/types/types";

const socialLinks: SocialLinks[] = [
  {
    imgSrc: "/images/Footer/facebook.svg",
    link: "https://facebook.com",
    width: 20,
  },
  {
    imgSrc: "/images/Footer/insta.svg",
    link: "https://instagram.com",
    width: 35,
  },
];

const footer = () => {
  return (
    <div className="max-w-2xl px-4 pt-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 my-12 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
        {/* COLUMN-1 */}

        <div className="sm:col-span-6 lg:col-span-5">
          <div className="flex gap-4">
            {socialLinks.map((items, i) => (
              <Link href={items.link} key={i}>
                <div className="flex items-center justify-center w-10 h-10 text-base bg-white rounded-full shadow-xl footer-icons hover:bg-pink">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={items.width}
                    height={2}
                    className="sepiaa"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.35689438791!2d17.054840199999997!3d51.0834207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc2ed9db2820d%3A0x600a19542516804!2zYWxlamEgQXJtaWkgS3Jham93ZWogNDgsIDUwLTUwNSBXcm9jxYJhdywg0J_QvtC70YzRidCw!5e0!3m2!1suk!2sde!4v1695216454566!5m2!1suk!2sde"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </>
      <div className="items-center justify-between py-10 border-t md:flex border-t-bordertop">
        <h4 className="text-sm font-normal text-center text-darkgrey md:text-start">
          @2023 - All Rights Reserved by &quot;Hair by Hanna&quot;
        </h4>
      </div>
    </div>
  );
};

export default footer;
