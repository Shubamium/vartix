import { GlobalConfig } from "payload";

const Home: GlobalConfig = {
  slug: "home",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "Hero",
          fields: [
            {
              label: "Hero Section Background",
              name: "hsbg",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
        {
          name: "About",
          fields: [
            {
              name: "cr",
              label: "About Carousel Images",
              admin: {
                description: "Recommended 3 Images",
              },
              type: "upload",
              relationTo: "media",
              hasMany: true,
            },
          ],
        },
        {
          name: "Works",
          fields: [
            {
              name: "wr_l",
              label: "Left Video",
              type: "upload",
              admin: {
                description:
                  "For videos, it's recommended to keep the bitrate or file size low for faster loading",
              },
              relationTo: "media",
            },
            {
              name: "wr_c",
              label: "Center Video",
              type: "upload",
              admin: {
                description:
                  "For videos, it's recommended to keep the bitrate or file size low for faster loading",
              },
              relationTo: "media",
            },
            {
              name: "wr_r",
              label: "Right Video",
              type: "upload",
              admin: {
                description:
                  "For videos, it's recommended to keep the bitrate or file size low for faster loading",
              },
              relationTo: "media",
            },
          ],
        },
      ],
    },
  ],
};

export default Home;
