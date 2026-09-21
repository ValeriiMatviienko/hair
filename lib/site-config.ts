export const siteConfig = {
  name: "Hair by Hanna",
  siteUrl: "https://hairbyhanna.eu",
  timeZone: "Europe/Warsaw",
  profileImagePath: "/images/profilePicture.webp",
  author: {
    name: "Hanna Matviienko",
    instagramUrl: "https://www.instagram.com/hair.by.hanna.warszawa/",
  },
  address: {
    label: "Świętokrzyska 37",
    mapsUrl: "https://maps.app.goo.gl/F738fsPTDwx33iKBA",
  },
  social: {
    facebook: "https://facebook.com/hair.by.hanna.ua",
    instagram: "https://www.instagram.com/hair.by.hanna.warszawa/",
    tiktok: "https://www.tiktok.com/@hair.by.hanna",
  },
  instagram: {
    handle: "@hair.by.hanna.warszawa",
    profileUrl: "https://www.instagram.com/hair.by.hanna.warszawa/",
    posts: [
      "https://www.instagram.com/p/DL7FCvrs70A/",
      "https://www.instagram.com/p/C_izAwPMYzR/",
      "https://www.instagram.com/p/DJ6osCLsi2Y/",
    ],
  },
  servicePrices: [150, 290, 390],
  additionalServicePrices: {
    bio_ampoule: 170,
    hair_trimming: 130,
    hair_polishing: 150,
    scalp_peeling: 210,
  },
} as const;
