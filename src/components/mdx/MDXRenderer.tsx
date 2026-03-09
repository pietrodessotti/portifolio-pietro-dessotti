import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { MDXComponents } from './MDXComponents'

interface MDXRendererProps {
  source: string
}

export function MDXRenderer({ source }: MDXRendererProps) {
  return (
    <div className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[var(--accent)] prose-code:font-mono prose-pre:bg-transparent prose-pre:p-0">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: 'wrap' }],
            ],
          },
        }}
        components={MDXComponents}
      />
    </div>
  )
}
