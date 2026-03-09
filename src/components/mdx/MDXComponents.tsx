import type { MDXComponents as MDXComponentsType } from 'mdx/types'
import { Callout } from './Callout'

export const MDXComponents: MDXComponentsType = {
  // Custom components available in MDX files
  Callout,

  // Override default HTML elements
  a: ({ href, children, ...props }) => (
    <a
      href={href}
      className="font-medium text-[var(--accent)] underline underline-offset-4 hover:no-underline"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  ),

  pre: ({ children, ...props }) => (
    <div className="relative my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <pre
        className="overflow-x-auto bg-zinc-950 p-4 text-sm leading-6 text-zinc-100 dark:bg-zinc-900"
        {...props}
      >
        {children}
      </pre>
    </div>
  ),

  code: ({ children, className, ...props }) => {
    // Block code (inside pre) already styled by pre override
    if (className) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
    // Inline code
    return (
      <code
        className="rounded-md bg-[var(--muted-bg)] px-1.5 py-0.5 font-mono text-sm text-[var(--foreground)]"
        {...props}
      >
        {children}
      </code>
    )
  },

  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-6 border-l-4 border-[var(--accent)] pl-4 text-[var(--muted)] italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
}
