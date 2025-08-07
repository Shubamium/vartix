import { GlobalConfig } from "payload";

const Career: GlobalConfig = {
  slug: "career",
  fields: [
    {
      name: "banner",
      type: "upload",
      required: true,
      relationTo: "media",
    },
    {
      name: "ima",
      label: "Image A",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "imb",
      label: "Image B",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "imc",
      label: "Image C",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      label: "Apply Form Link",
      required: true,
      name: "apply_link",
      type: "text",
    },
  ],
};

export default Career;
