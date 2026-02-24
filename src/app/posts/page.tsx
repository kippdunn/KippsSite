import ArticleListItem from "@/components/ArticleListItem";
import { getCategorisedArticles } from "@/lib/articles";

const PostsPage = () => {
  const articles = getCategorisedArticles();

  return (
    <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
      <h1 className="text-4xl font-bold mb-4">Posts</h1>
      <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
        {articles !== null && Object.keys(articles).map(article => (
          <ArticleListItem 
            category={article}
            articles={articles[article]}
            key={article} />
        ))}
      </section>
    </section>
  );
};

export default PostsPage;
