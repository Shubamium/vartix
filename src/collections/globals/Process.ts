import { GlobalConfig } from "payload";

const Process: GlobalConfig = {
  slug: "process",
  fields: [
    {
      name: "ourPriorityImage",
      label: "Our Priority Image",
      type: "upload",
      relationTo: "media",
    },
  ],
};

export default Process;
