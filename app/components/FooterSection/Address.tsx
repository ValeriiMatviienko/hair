import { siteConfig } from "@/lib/site-config";

const Address = () => {
  return (
    <address className="text-center text-lg hover:underline">
      <a
        href={siteConfig.address.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {siteConfig.address.label}
      </a>
    </address>
  );
};

export default Address;
