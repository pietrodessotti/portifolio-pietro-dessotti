'use client'

import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) throw new Error('Failed to send')

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-colors'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
            Name
          </label>
          <input
            type="text"
            required
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
            Email
          </label>
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
          Message
        </label>
        <textarea
          required
          rows={6}
          placeholder="Tell me about your project or opportunity..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'success' && (
        <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800 dark:border-green-800 dark:bg-green-950/30 dark:text-green-300">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          Message sent! I&apos;ll get back to you as soon as possible.
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300">
          <AlertCircle className="h-4 w-4 shrink-0" />
          Something went wrong. Please try again or reach out via email.
        </div>
      )}

      <Button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send message'}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  )
}
