import { resend, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "./emailTemplates.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  try {
    const { data, error } = await resend.emails.send({
      from: `${sender.name} <${sender.email}>`,
      to: [email],
      subject: "Welcome to Chatify!",
      html: createWelcomeEmailTemplate(name, clientURL),
    });
    if (error) { console.error("Failed to send welcome email:", error); return; }
    console.log("Welcome email sent successfully:", data);
  } catch (error) { console.error("Error in sendWelcomeEmail:", error); }
};
