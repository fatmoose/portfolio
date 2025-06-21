import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create transporter for sending emails
    // Note: You'll need to set up environment variables for email configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your preferred email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASSWORD, // Your email password or app password
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'yashrkatwal@gmail.com', // Your email where you want to receive messages
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: 'Courier New', monospace; background: #000; color: #00ff00; padding: 20px; border: 1px solid #00ff00;">
          <h2 style="color: #00ff00; border-bottom: 1px solid #00ff00; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0; padding: 15px; border: 1px solid #00ff00; background: #1a1a1a;">
            <p><strong style="color: #00ffff;">Name:</strong> ${name}</p>
            <p><strong style="color: #00ffff;">Email:</strong> ${email}</p>
            <p><strong style="color: #00ffff;">Subject:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0; padding: 15px; border: 1px solid #00ff00; background: #1a1a1a;">
            <h3 style="color: #00ffff; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 10px; border: 1px solid #00ff00; background: #1a1a1a; font-size: 12px;">
            <p style="margin: 0;"><strong>Sent from:</strong> Portfolio Contact Form</p>
            <p style="margin: 0;"><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      replyTo: email, // This allows you to reply directly to the sender
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 