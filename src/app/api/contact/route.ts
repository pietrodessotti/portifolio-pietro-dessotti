import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const resendKey = process.env.RESEND_API_KEY

    if (!resendKey) {
      // Development fallback: log to console
      console.log('Contact form submission:', { name, email, message })
      return NextResponse.json({ success: true })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(resendKey)

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'pietrohdessotti@gmail.com',
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
