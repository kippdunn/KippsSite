
import Link from "next/link"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { getArticleData } from "@/lib/articles"
import { notFound } from "next/navigation"


const Article = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    const articleData = await getArticleData(slug);

    // If the article has no date, return 404
    if (!articleData.date || articleData.date.trim() === "" || articleData.date === "Invalid date") {
        notFound();
    }

    return (
        <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
            <div className="flex justify-between font-poppins">
                <Link href={"/posts"} className="flex flex-row gap-1 place-items-center">
                    <ArrowLeftIcon width={20} />
                    <p>back</p>
                </Link>
                <p>{articleData.date.toString()}</p>
            </div>
            <article
                className="article"
                dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
            />
        </section>
    );
}

export default Article