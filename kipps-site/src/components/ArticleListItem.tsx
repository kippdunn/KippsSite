import Link from "next/link"
import type { ArticleItem } from "@/types"

interface Props {
    category: string
    articles: ArticleItem[]
}   

export const ArticleListItem = ({ category, articles }: Props) => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="font-coromorant-garamond text-4xl">{category}</h2>
            <div className="flex flex-col gap-2.5 font-poppins text-lg">
                {articles.map((article, id) => (
                    <Link href={`/articles/${article.id}`} key={id} className="text-neutral-900 hover:text-amber-700 transition duration-150">
                        {article.title}
                    </Link>
                 )
                )}
            </div>
        </div>
    )
}   