import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  upload: {
    imageSizes: [
      {
        name: "small",
        height: 624,
      },
      {
        name: "medium",
        height: 1280,
      },
      {
        name: "max",
        height: 1920,
      },
    ],
  },
};
