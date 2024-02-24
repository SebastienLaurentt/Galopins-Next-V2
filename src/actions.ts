"use server"
import { Resend } from "resend"

interface State {
  error: string | null
  success: boolean
}

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export const sendEmail = async (prevState: State, formData: FormData) => {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'jllaurent.26@gmail.com',
      subject: `Nouveau message de ${name} - ${email}`,
      text:  message, 
    })
    return {
      error: null,
      success: true
    }
  } catch (error) {
    console.log(error)
    return {
      error: (error as Error).message,
      success: false
    }
  }
}