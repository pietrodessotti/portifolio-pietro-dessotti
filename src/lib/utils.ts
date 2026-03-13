import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format, parseISO } from 'date-fns'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  return format(parseISO(dateString), 'MMMM d, yyyy')
}

export function formatDateShort(dateString: string): string {
  return format(parseISO(dateString), 'MMM yyyy')
}

export function isActiveLink(pathname: string, href: string): boolean {
  return pathname === href || (href !== '/' && pathname.startsWith(href))
}
