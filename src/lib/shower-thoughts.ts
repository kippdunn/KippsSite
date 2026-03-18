import { remark } from "remark";
import html from "remark-html";
import { showerThoughtsMarkdown } from "@/generated/shower-thoughts";

export const getShowerThoughtsData = async () => {
  const processedContent = await remark().use(html).process(showerThoughtsMarkdown);
  const contentHtml = processedContent.toString();
  return { contentHtml };
};
