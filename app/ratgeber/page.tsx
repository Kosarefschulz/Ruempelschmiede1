import Link from 'next/link'
import { getAllPosts } from '../../lib/posts'

export default function RatgeberPage() {
  const posts = getAllPosts()
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Ratgeber</h1>
      <ul className="space-y-4">
        {posts.map(({ slug, frontMatter }) => (
          <li key={slug}>
            <Link href={`/ratgeber/${slug}`} className="text-blue-600 underline">
              {frontMatter.title}
            </Link>
            <p className="text-sm text-gray-500">{frontMatter.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
