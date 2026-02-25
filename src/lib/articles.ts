import moment from "moment"
import { remark } from "remark"
import html from "remark-html"

import type { ArticleItem } from "@/types"
import { articles } from "@/generated/articles"

const getSortedArticles = (): ArticleItem[] => {
    // Filter out articles that are not published
    const filteredArticles = articles.filter(article => article.published)

    return filteredArticles.sort((a, b) => {
        const format = "YYYY-MM-DD"
        const dateA = moment(a.date, format)
        const dateB = moment(b.date, format)
        if (dateA.isBefore(dateB)) {
            return -1
        }
        if (dateA.isAfter(dateB)) {
            return 1
        }
        return 0
    })
}

export const getCategorisedArticles = (): Record<string, ArticleItem[]> => {
    const sortedArticles = getSortedArticles()
    const categorizedArticles: Record<string, ArticleItem[]> = {}
    
    sortedArticles.forEach((article) => {
        if (!categorizedArticles[article.category]) {
            categorizedArticles[article.category] = []
        }
        categorizedArticles[article.category].push(article)
    })

    return categorizedArticles
}


export { getSortedArticles }

export const getArticleData = async (id: string) => {
    const article = articles.find(a => a.id === id)
    
    if (!article) {
        throw new Error(`Article not found: ${id}`)
    }

    const processedContent = await remark()
        .use(html)
        .process(article.content)

    const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        title: article.title,
        category: article.category,
        date: moment(article.date, "YYYY-MM-DD").format("MMMM D, YYYY"),
        published: article.published,
    }
}
