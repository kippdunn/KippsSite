import fs from "fs"
import matter from "gray-matter"
import path from "path"
import moment from "moment"
import { remark } from "remark"
import html from "remark-html"

import type { ArticleItem } from "@/types"

const articlesDirectory = path.join(process.cwd(), "articles")

const getSortedArticles = (): ArticleItem[] => {
    const fileNames = fs.readdirSync(articlesDirectory)

    const allArticlesData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "")
        const fullPath = path.join(articlesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const matterResult = matter(fileContents)

        return {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            category: matterResult.data.category,
            published: matterResult.data.published === true || matterResult.data.published === 'true',
        }
    })

    // Filter out articles that are not published
    const filteredArticles = allArticlesData.filter(article => article.published)

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
    const articles = getSortedArticles()
    const categorizedArticles: Record<string, ArticleItem[]> = {}
    
    articles.forEach((article) => {
        if (!categorizedArticles[article.category]) {
            categorizedArticles[article.category] = []
        }
        categorizedArticles[article.category].push(article)
    })

    return categorizedArticles
}


export { getSortedArticles }

export const getArticleData = async (id: string) => {
    const fullPath = path.join(articlesDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf-8")

    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)

    const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        title: matterResult.data.title,
        category: matterResult.data.category,
        date: moment(matterResult.data.date, "YYYY-MM-DD").format("MMMM D, YYYY"),
        published: matterResult.data.published === true || matterResult.data.published === 'true',
    }
}

