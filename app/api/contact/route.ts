import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {

try{
      const { email, message } = await request.json();
      if(!email || !message){
        return new Response("Email and message are required", { status: 400 });

      }

      await resend.emails.send({
        from: "Portfolio<onboarding@resend.dev>",
        to: "sujalghorse9@gmail.com",
        subject:"New message from Portfolio contact form",
        text:`You have received a new message from ${email}:\n\n${message}`,
      })

      return Response.json({ message: "Email sent successfully" }, { status: 200 });

}catch(err){
    console.error("Error sending email:", err);
    return Response.json({error:"Internal Server Error"}, { status: 500 });
}


  
}