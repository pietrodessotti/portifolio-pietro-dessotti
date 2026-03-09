import { cn } from '@/lib/utils'
import { Info, AlertTriangle, Lightbulb, CheckCircle2 } from 'lucide-react'

type CalloutType = 'info' | 'warning' | 'tip' | 'insight'

interface CalloutProps {
  type?: CalloutType
  children: React.ReactNode
}

const config: Record<CalloutType, { icon: React.ElementType; className: string }> = {
  info: {
    icon: Info,
    className: 'border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-200',
  },
  warning: {
    icon: AlertTriangle,
    className: 'border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200',
  },
  tip: {
    icon: Lightbulb,
    className: 'border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950/30 dark:text-green-200',
  },
  insight: {
    icon: CheckCircle2,
    className: 'border-purple-200 bg-purple-50 text-purple-900 dark:border-purple-800 dark:bg-purple-950/30 dark:text-purple-200',
  },
}

export function Callout({ type = 'info', children }: CalloutProps) {
  const { icon: Icon, className } = config[type]

  return (
    <div className={cn('my-6 flex gap-3 rounded-lg border p-4', className)}>
      <Icon className="mt-0.5 h-4 w-4 shrink-0" />
      <div className="text-sm leading-6 [&>p]:mb-0">{children}</div>
    </div>
  )
}
