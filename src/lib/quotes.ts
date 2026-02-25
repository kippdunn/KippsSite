import { remark } from "remark";
import html from "remark-html";
import { quotesMarkdown } from "@/generated/quotes";

export const getQuotesData = async () => {
  const processedContent = await remark().use(html).process(quotesMarkdown);
  const contentHtml = processedContent.toString();
  return { contentHtml };
};
