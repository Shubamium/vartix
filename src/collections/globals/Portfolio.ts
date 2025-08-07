import { GlobalConfig } from "payload";

const Portfolio: GlobalConfig = {
  slug: "portfolio",
  fields: [
    {
      name: "rart",
      label: "Rotating Gallery Art",
      type: "upload",
      relationTo: "media",
      hasMany: true,
    },
    {
      name: "wl",
      label: "Portfolio List",
      type: "array",
      fields: [
        {
          name: "top",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "bl",
          label: "Bottom Left",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "br",
          label: "Bottom Right",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};

export default Portfolio;
