export const createWelcomeEmailTemplate = (name, clientURL) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8"><title>Welcome to Chatify</title></head>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; background: #ffffff; padding: 20px; border-radius: 8px;">
            <h2 style="color: #333;">Welcome to Chatify, ${name}! 🎉</h2>
            <p style="color: #555;">We are thrilled to have you on board.</p>
            <a href="${clientURL}" style="background-color: #007bff; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin-top: 20px;">Get Started</a>
        </div>
    </body>
    </html>`;
};
