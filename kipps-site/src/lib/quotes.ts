import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export const getQuotesData = async () => {
  const quotesPath = path.join(process.cwd(), "quotes", "quotes.md");
  const fileContents = fs.readFileSync(quotesPath, "utf-8");
  const processedContent = await remark().use(html).process(fileContents);
  const contentHtml = processedContent.toString();
  return { contentHtml };
};
