import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Setup JSON body parsing
  app.use(express.json());

  // API Route: Send Diagnostic Email via Resend
  app.post("/api/send-email", async (req, res) => {
    try {
      const { email, firstName, score, tierName, riskProfile, privacyAlignment, attentionReadiness, riskDesc, tierDesc } = req.body;

      if (!email) {
        return res.status(400).json({ success: false, error: "Email address is required." });
      }

      const apiKey = process.env.RESEND_API_KEY;

      // Construct a beautiful HTML template for the email
      const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Astrateq Gadgets - Your Vehicle Readiness Report</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              background-color: #f0f4f8;
              color: #1e293b;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background: #ffffff;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
              border: 1px solid #e2e8f0;
            }
            .header {
              background-color: #0b1a30;
              padding: 32px 24px;
              text-align: center;
              border-bottom: 4px solid #0284c7;
            }
            .logo {
              color: #38bdf8;
              font-size: 24px;
              font-weight: 800;
              letter-spacing: -0.025em;
              margin: 0;
            }
            .logo span {
              color: #ffffff;
            }
            .content {
              padding: 32px 24px;
            }
            h1 {
              font-size: 22px;
              font-weight: 700;
              color: #0f172a;
              margin-top: 0;
              margin-bottom: 12px;
            }
            p {
              font-size: 15px;
              line-height: 1.6;
              color: #475569;
              margin-top: 0;
              margin-bottom: 20px;
            }
            .score-box {
              background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
              border: 1px solid #e2e8f0;
              border-radius: 12px;
              padding: 24px;
              text-align: center;
              margin-bottom: 28px;
            }
            .score-value {
              font-size: 48px;
              font-weight: 800;
              color: #0284c7;
              line-height: 1;
            }
            .score-label {
              font-size: 12px;
              font-weight: 700;
              color: #64748b;
              text-transform: uppercase;
              letter-spacing: 0.1em;
              margin-top: 8px;
            }
            .metrics-table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 28px;
            }
            .metrics-table td {
              padding: 12px;
              border-bottom: 1px solid #f1f5f9;
              font-size: 14px;
            }
            .metrics-table td.label {
              font-weight: 600;
              color: #475569;
              width: 45%;
            }
            .metrics-table td.value {
              font-weight: 700;
              color: #0f172a;
              text-align: right;
            }
            .badge {
              display: inline-block;
              background-color: #e0f2fe;
              color: #0369a1;
              padding: 4px 8px;
              border-radius: 6px;
              font-size: 12px;
              font-weight: 700;
            }
            .explanation-box {
              background-color: #f0fdf4;
              border-left: 4px solid #22c55e;
              padding: 16px;
              border-radius: 0 8px 8px 0;
              margin-bottom: 28px;
            }
            .explanation-title {
              font-size: 13px;
              font-weight: 700;
              color: #15803d;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              margin-bottom: 4px;
            }
            .explanation-text {
              font-size: 13px;
              line-height: 1.5;
              color: #166534;
              margin: 0;
            }
            .cta-button {
              display: block;
              text-align: center;
              background-color: #0284c7;
              color: #ffffff !important;
              text-decoration: none;
              padding: 14px 24px;
              border-radius: 10px;
              font-weight: 700;
              font-size: 15px;
              margin-bottom: 24px;
            }
            .footer {
              background-color: #f8fafc;
              padding: 24px;
              text-align: center;
              border-top: 1px solid #f1f5f9;
              font-size: 12px;
              color: #64748b;
              line-height: 1.5;
            }
            .footer p {
              margin: 4px 0;
              font-size: 12px;
              color: #64748b;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 class="logo">Astrateq <span>Gadgets</span></h2>
            </div>
            <div class="content">
              <h1>Hi ${firstName || "Driver"},</h1>
              <p>Your pre-launch driver awareness simulation is complete. Below is a breakdown of your simulated driver awareness score as requested.</p>

              <div class="score-box">
                <div class="score-value">${score || 0}<span style="font-size: 20px; color: #94a3b8;">/100</span></div>
                <div class="score-label">Driver Awareness Score</div>
              </div>

              <table class="metrics-table">
                <tr>
                  <td class="label">Cohort Classification</td>
                  <td class="value"><span class="badge">${tierName || "N/A"}</span></td>
                </tr>
                <tr>
                  <td class="label">Driving Risk Profile</td>
                  <td class="value">${riskProfile || "N/A"}</td>
                </tr>
                <tr>
                  <td class="label">Attention Pattern Readiness</td>
                  <td class="value">${attentionReadiness || "N/A"}</td>
                </tr>
                <tr>
                  <td class="label">Privacy Alignment</td>
                  <td class="value">${privacyAlignment || "N/A"}</td>
                </tr>
              </table>

              <div class="explanation-box">
                <div class="explanation-title">What This Means</div>
                <p class="explanation-text">
                  ${tierDesc || "Your profile shows strong, top-tier alignment with Astrateq Gadgets' pre-launch driver awareness priorities."} Specifically, your simulated profile helps us understand driving focus resilience under typical high-velocity Ontario highway commuting without tracking or sending driving habits to insurers.
                </p>
              </div>

              <a href="https://reserve.astrateqgadgets.com?entry=simulation&intent=cohort&email=${encodeURIComponent(email)}" class="cta-button">
                Continue to Founding Cohort Reservation
              </a>

              <p style="font-size: 13px; color: #64748b; text-align: center; margin-top: 24px; margin-bottom: 0;">
                🔒 <strong>Zero-Surveillance Promise</strong>: Astrateq Gadgets does not track your location or share logs with commercial auto insurers.
              </p>
            </div>
            <div class="footer">
              <p><strong>Astrateq Gadgets Pre-Launch Initiative</strong></p>
              <p>Toronto, ON, Canada</p>
              <p style="font-size: 10px; margin-top: 12px; color: #94a3b8;">
                This simulated report is informational and does not replace certified professional driver training or safety assessments.
              </p>
            </div>
          </div>
        </body>
        </html>
      `;

      if (!apiKey) {
        console.log("No RESEND_API_KEY environment variable found. Email simulated perfectly for:", email);
        return res.json({
          success: true,
          simulated: true,
          message: "No Resend API Key configured in server environment. The email dispatch was simulated successfully.",
          recipient: email,
          firstName
        });
      }

      // Send the real email using Resend API via standard native fetch
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "Astrateq Gadgets <onboarding@resend.dev>", // Resend Sandbox Sender address
          to: [email],
          subject: `Astrateq Gadgets: Your Vehicle Readiness Report (${score}/100)`,
          html: emailHtml
        })
      });

      const resData = await response.json();

      if (!response.ok) {
        console.error("Resend API returned an error:", resData);
        return res.status(response.status).json({
          success: false,
          error: resData.message || "Failed to send email through Resend API."
        });
      }

      console.log("Email successfully sent via Resend API:", resData);
      return res.json({
        success: true,
        simulated: false,
        message: "Readiness Report email successfully dispatched via Resend API!",
        data: resData
      });

    } catch (error: any) {
      console.error("Error in send-email API route:", error);
      return res.status(500).json({ success: false, error: error.message || "An unexpected error occurred." });
    }
  });

  // Serve static assets in production, otherwise Vite middleware handles it
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
    console.log(`Full-stack server running on http://localhost:${PORT}`);
  });
}

startServer();
