import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API route for sending emails
  app.post("/api/send-email", async (req, res) => {
    const { nombre, empresa, email, telefono, servicio, mensaje } = req.body;

    // Check if SMTP credentials are set
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("SMTP credentials not configured. Email will not be sent.");
      return res.status(500).json({ 
        error: "El servidor de correo no está configurado. Por favor, contacte al administrador." 
      });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"Web AISLA-ZAR" <${process.env.SMTP_USER}>`,
        to: process.env.EMAIL_TO || "ventas@aisla-zar.com",
        subject: `Nueva Cotización: ${servicio} - ${empresa}`,
        text: `
          Nueva solicitud de cotización recibida desde el sitio web:
          
          Nombre: ${nombre}
          Empresa: ${empresa}
          Email: ${email}
          Teléfono: ${telefono}
          Servicio: ${servicio}
          
          Mensaje:
          ${mensaje}
        `,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
            <h2 style="color: #EE1C25; border-bottom: 2px solid #EE1C25; padding-bottom: 10px;">Nueva Solicitud de Cotización</h2>
            <p>Se ha recibido un nuevo mensaje desde el formulario de contacto:</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Nombre:</td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Empresa:</td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${empresa}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Teléfono:</td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${telefono}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Servicio:</td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${servicio}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
              <h3 style="margin-top: 0; font-size: 16px;">Mensaje:</h3>
              <p style="white-space: pre-wrap;">${mensaje}</p>
            </div>
            <p style="font-size: 12px; color: #888; margin-top: 30px; text-align: center;">
              Este es un mensaje automático generado por el sitio web de AISLA-ZAR S.A.
            </p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email enviado correctamente" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error al enviar el email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
