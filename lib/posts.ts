import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostFrontMatter {
  title: string
  date: string
  excerpt: string
  slug: string
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.mdx'))
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return {
    slug: realSlug,
    frontMatter: data as PostFrontMatter,
    content,
  }
}

export function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = slugs.map((slug) => getPostBySlug(slug))
  return posts.sort((a, b) => (a.frontMatter.date < b.frontMatter.date ? 1 : -1))
}
