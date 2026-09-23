import { siteConfig } from "@/lib/site-config";

const Address = () => {
  return (
    <address className="text-lg not-italic text-paper">
      <a
        href={siteConfig.address.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-paper underline-offset-4 hover:underline"
      >
        {siteConfig.address.label}
      </a>
    </address>
  );
};

export default Address;
