import { FC } from "react";

const Address: FC = () => {
  return (
    <address className="text-lg text-center hover:underline">
      <a
        href="https://www.google.com/maps/search/?api=1&query=Aleja+Armii+Krajowej+48+Wrocław+(Krzyki)"
        target="_blank"
        rel="noopener noreferrer"
      >
        al. Armii Krajowej 48 <br /> Wrocław (Krzyki)
      </a>
    </address>
  );
};

export default Address;
