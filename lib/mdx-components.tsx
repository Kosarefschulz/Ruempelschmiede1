import type { MDXComponents } from 'mdx/types'
import { FC } from 'react'

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 className="text-3xl font-bold mb-4" {...props} />,
  p: (props) => <p className="mb-4" {...props} />,
}
