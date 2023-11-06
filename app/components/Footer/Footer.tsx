import { socialLinks } from "./SocialLinks";

const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <div className="max-w-2xl px-4 pt-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 my-12 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
        <div className="col-span-full sm:col-span-6">
          <h2 className="mb-4 text-lg text-center uppercase">Follow me on:</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-5">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <div className="flex flex-col items-center hover:underline">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-xl md:w-14 md:h-14 ">
                    <item.Component className="w-full h-full" />
                  </div>
                  <p className="mt-2 text-lg text-center text-black">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <div className="py-4">
            <h2 className="mb-2 text-lg text-center uppercase">Address:</h2>
            <div className="text-lg text-center hover:underline ">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Aleja+Armii+Krajowej+48+Wrocław+(Krzyki)"
                target="_blank"
                rel="noopener noreferrer"
              >
                al. Armii Krajowej 48 <br /> Wrocław (Krzyki)
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-full sm:col-span-6">
          <iframe
            title="Hair by Hanna Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.35689438791!2d17.054840199999997!3d51.0834207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc2ed9db2820d%3A0x600a19542516804!2zYWxlamEgQXJtaWkgS3Jham93ZWogNDgsIDUwLTUwNSBXcm9jxYJhdywg0J_QvtC70YzRidCw!5e0!3m2!1suk!2sde!4v1695216454566!5m2!1suk!2sde"
            width="100%"
            height="250"
            className="w-full rounded-lg shadow-lg sm:h-96"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="items-center justify-between py-6 border-t md:flex border-t-bordertop">
        <h3 className="text-center text-black md:text-lg md:text-start">
          &quot;Copyright &copy; {currentYear} Hair by Hanna. All rights
          reserved.&quot;
        </h3>
      </div>
    </div>
  );
};

export default Footer;
