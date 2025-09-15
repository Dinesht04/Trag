import { Phone } from "lucide-react"
import type * as React from "react"

interface EmailTemplateProps {
  firstName: string
  email: string
  message: string
  phone: number
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ firstName, email,phone, message }) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>
      <strong>Name:</strong> {firstName}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Phone:</strong> {phone}
    </p>
    <p>
      <strong>Message:</strong>
    </p>
    <p>{message}</p>
  </div>
)
