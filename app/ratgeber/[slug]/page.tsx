import { mdxComponents } from '../../../lib/mdx-components'
import { getPostBySlug, getPostSlugs } from '../../../lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({ slug: slug.replace(/\.mdx$/, '') }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { content, frontMatter } = getPostBySlug(params.slug)
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{frontMatter.title}</h1>
      <MDXRemote source={content} components={mdxComponents} />
    </div>
  )
}
