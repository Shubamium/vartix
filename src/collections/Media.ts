import type { CollectionConfig, ImageUploadFormatOptions } from "payload";

const formatOptions: ImageUploadFormatOptions = {
  format: "webp",
  options: {
    quality: 80,
  },
};
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
    formatOptions,
    imageSizes: [
      {
        name: "small",
        width: 854,
        height: 624,
        fit: "inside",
        withoutEnlargement: true,
        background: "#FFFFFF00",
        formatOptions: {
          format: "webp",
          options: {
            quality: 80,
          },
        },
      },
      {
        name: "medium",
        width: 1280,
        height: 720,
        fit: "inside",
        background: "#FFFFFF00",
        withoutEnlargement: true,
        formatOptions,
      },
      {
        name: "max",
        height: 1920,
        fit: "inside",
        withoutEnlargement: true,
        background: "#FFFFFF00",
        width: 1080,
        formatOptions,
      },
    ],
  },
};
