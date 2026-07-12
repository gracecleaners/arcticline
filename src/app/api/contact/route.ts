import { NextResponse } from 'next/server'
import { getResend } from '@/lib/resend'

// Simple HTML sanitization to strip tags from user input
function sanitize(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, service, budget, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact us directly at info@arcticline.xyz.' },
        { status: 500 }
      )
    }

    // Sanitize all user inputs before injecting into HTML
    const s = {
      name: sanitize(name),
      email: sanitize(email),
      company: company ? sanitize(company) : '',
      service: service ? sanitize(service) : '',
      budget: budget ? sanitize(budget) : '',
      message: sanitize(message),
    }

    const resend = getResend()
    const { data, error } = await resend.emails.send({
      from: 'Arcticline Contact <info@arcticline.xyz>',
      to: ['info@arcticline.xyz'],
      replyTo: email,
      subject: `New Contact Form Submission from ${s.name}${s.company ? ` — ${s.company}` : ''}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f9fafb; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
            .header { background: linear-gradient(135deg, #0F77AA, #0C5F88); padding: 32px; border-radius: 16px 16px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .content { background: white; padding: 32px; border-radius: 0 0 16px 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
            .field { margin-bottom: 20px; }
            .field-label { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 4px; }
            .field-value { font-size: 16px; color: #111827; }
            .divider { height: 1px; background: #e5e7eb; margin: 24px 0; }
            .badge { display: inline-block; padding: 4px 12px; border-radius: 9999px; background: #e0f2fe; color: #0369a1; font-size: 13px; font-weight: 500; }
            .footer-text { text-align: center; color: #9ca3af; font-size: 13px; margin-top: 24px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📬 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Name</div>
                <div class="field-value">${s.name}</div>
              </div>
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value"><a href="mailto:${s.email}" style="color: #0F77AA;">${s.email}</a></div>
              </div>
              ${s.company ? `
              <div class="field">
                <div class="field-label">Company</div>
                <div class="field-value">${s.company}</div>
              </div>
              ` : ''}
              ${s.service ? `
              <div class="field">
                <div class="field-label">Service Interest</div>
                <div class="field-value"><span class="badge">${s.service}</span></div>
              </div>
              ` : ''}
              ${s.budget ? `
              <div class="field">
                <div class="field-label">Budget Range</div>
                <div class="field-value">${s.budget}</div>
              </div>
              ` : ''}
              <div class="divider"></div>
              <div class="field">
                <div class="field-label">Message</div>
                <div class="field-value" style="white-space: pre-wrap; line-height: 1.6;">${s.message}</div>
              </div>
              <div class="divider"></div>
              <div class="footer-text">
                Sent from arcticline.xyz contact form
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)

      // Check for domain verification errors
      const errorMessage = String(error)
      if (errorMessage.includes('domain') || errorMessage.includes('verified')) {
        return NextResponse.json(
          { error: 'Email delivery is still being set up. Please email us directly at info@arcticline.xyz and we\'ll respond promptly.' },
          { status: 500 }
        )
      }

      return NextResponse.json(
        { error: 'Failed to send message. Please try again or email us directly at info@arcticline.xyz.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully! We\'ll get back to you within 24 hours.' }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again or email us directly at info@arcticline.xyz.' },
      { status: 500 }
    )
  }
}
