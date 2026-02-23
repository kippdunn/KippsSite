import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getQuotesData } from "@/lib/quotes";

const QuotesPage = async () => {
  const { contentHtml } = await getQuotesData();

  return (
    <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
      <div className="flex justify-between font-poppins">
        <Link href="/" className="flex flex-row gap-1 place-items-center">
          <ArrowLeftIcon width={20} />
          <p>home</p>
        </Link>
        <span />
      </div>
      <header className="font-cormorant-garamond font-light text-5xl text-neutral-900 text-center mb-8">
        <h1>Favorite Quotes</h1>
      </header>
      <article className="article" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </section>
  );
};

export default QuotesPage;
