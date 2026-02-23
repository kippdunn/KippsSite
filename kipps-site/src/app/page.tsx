import ArticleListItem from "@/components/ArticleListItem"
import { getCategorisedArticles } from "@/lib/articles"

const HomePage = () => {
  const articles = getCategorisedArticles()

  console.log(articles)
  return (
    <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
      <header className="font-cormorant-garamond font-light text-6xl text-neutral-900 text-center">
        <h1>Kipp's Blog</h1>
      </header>
      <div className="flex justify-center mb-4">
        <a
          href="/quotes"
          className="inline-block rounded bg-neutral-200 px-4 py-2 text-neutral-700 hover:bg-neutral-300 font-poppins transition-colors duration-150 shadow"
        >
          View Favorite Quotes
        </a>
      </div>
      <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
        {articles !== null && Object.keys(articles).map(article => (
          <ArticleListItem 
            category={article}
            articles={articles[article]}
            key={article} />
        ))}
      </section>
    </section>
  )
}

export default HomePage