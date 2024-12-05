import { EmailTemplate } from './../../_components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
     const responce=await req.json();
  try {
    const data = await resend.emails.send({
      from: 'resorcex@resend.dev',
      to: ['cs23b1034@iiitr.ac.in'],
      subject: responce?.userName+" share file with You",
      react: EmailTemplate({ responce }),
    });


    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
