import { EmailTemplate } from "@/components/email-template"
import { Resend } from "resend"

const resend = new Resend("re_hrmmXk3P_3onAQALdJt7GdLfeiZafhmGW")

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["dineshtyagi567@gmail.com","pranshu3961@gmail.com"],
      subject: "Trag Enquiry",
      html: `<p>Name: ${formData.fullName}</p><p>Message: ${formData.message}</p><p>Phone: ${formData.phone}</p><p>Email: ${formData.email}</p>`,    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
