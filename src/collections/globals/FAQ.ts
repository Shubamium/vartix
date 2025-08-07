import { GlobalConfig } from "payload";

const FAQ: GlobalConfig = {
  slug: "faq",
  fields: [
    {
      name: "faq",
      type: "array",
      fields: [
        {
          name: "question",
          type: "text",
          required: true,
        },
        {
          name: "answer",
          type: "richText",
          required: true,
        },
      ],
    },
  ],
};

export default FAQ;
