import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email, token) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "donotreply@smrtevote.com",
    to: email,
    subject: "Verify your email address",
    html: `<p>Thank You for joining SMRTeVote! To activate your account and start creating elections, please click the verification link below:</p>
    
    <p><a href="${confirmLink}">Verify your email address.</a></p>
    
    <p>Thank You!</p>
    
    <p>The Team @ <a href="https://www.smrtevote.com">SMRTeVote</a></p>
    `,
  });
};
