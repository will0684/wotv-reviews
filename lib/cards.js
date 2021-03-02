import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const cardsDirectory = path.join(process.cwd(), 'cards')

export function getAllCardIds() {
  const fileNames = fs.readdirSync(cardsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getCardData(id) {
  const fullPath = path.join(cardsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)
  
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id
  return {
    id,
    content: contentHtml,
    ...matterResult.data
  }
}