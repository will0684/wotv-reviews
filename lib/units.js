import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const unitsDirectory = path.join(process.cwd(), 'units')

export function getAllUnitIds() {
  const fileNames = fs.readdirSync(unitsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getUnitData(id) {
  const fullPath = path.join(unitsDirectory, `${id}.md`)
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