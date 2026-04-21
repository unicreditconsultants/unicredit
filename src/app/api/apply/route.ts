import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract all form fields
    const data: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value.toString();
    }

    // Format key names: camelCase/snake_case → Title Case
    const formatKey = (key: string) =>
      key
        .replace(/[_-]/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/\b\w/g, (c) => c.toUpperCase());

    // Build table rows
    const tableRows = Object.entries(data)
      .map(
        ([key, value], index) => `
          <tr style="background-color: ${index % 2 === 0 ? '#ffffff' : '#f7f8fa'};">
            <td style="
              padding: 12px 16px;
              font-size: 13px;
              font-weight: 600;
              color: #6b7280;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              border-right: 1px solid #e5e7eb;
              white-space: nowrap;
              width: 35%;
            ">${formatKey(key)}</td>
            <td style="
              padding: 12px 16px;
              font-size: 14px;
              color: #111827;
              word-break: break-word;
            ">${value || '<span style="color:#9ca3af;font-style:italic;">—</span>'}</td>
          </tr>`
      )
      .join('');

    const submittedAt = new Date().toLocaleString('en-GB', {
      dateStyle: 'long',
      timeStyle: 'short',
    });

    const htmlEmail = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>New Application Submission</title>
      </head>
      <body style="margin:0; padding:0; background-color:#f3f4f6; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">

        <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6; padding: 40px 16px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

                <!-- Header -->
                <tr>
                  <td style="
                    background: linear-gradient(135deg, #1a3c6e 0%, #0f2547 100%);
                    padding: 36px 40px;
                    border-radius: 12px 12px 0 0;
                  ">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <p style="margin:0 0 4px 0; font-size:11px; font-weight:600; color:#93c5fd; text-transform:uppercase; letter-spacing:0.1em;">UniCredit</p>
                          <h1 style="margin:0; font-size:24px; font-weight:700; color:#ffffff; line-height:1.3;">
                            New Application Received
                          </h1>
                        </td>
                        <td align="right" valign="middle">
                          <div style="
                            background: rgba(255,255,255,0.15);
                            border-radius: 50%;
                            width: 48px;
                            height: 48px;
                            display: inline-block;
                            text-align: center;
                            line-height: 48px;
                            font-size: 22px;
                          ">📋</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Meta bar -->
                <tr>
                  <td style="background-color:#1e40af; padding: 10px 40px;">
                    <p style="margin:0; font-size:12px; color:#bfdbfe;">
                      Submitted on <strong style="color:#ffffff;">${submittedAt}</strong>
                      &nbsp;·&nbsp;
                      <strong style="color:#ffffff;">${Object.keys(data).length}</strong> field(s) captured
                    </p>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="background-color:#ffffff; padding: 32px 40px;">
                    <p style="margin:0 0 20px 0; font-size:14px; color:#6b7280; line-height:1.6;">
                      A new "Apply Now" form submission has been received. Review the applicant's details below.
                    </p>

                    <!-- Data table -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="
                      border-collapse: collapse;
                      border: 1px solid #e5e7eb;
                      border-radius: 8px;
                      overflow: hidden;
                      font-size: 14px;
                    ">
                      <thead>
                        <tr style="background-color:#f9fafb;">
                          <th style="
                            padding: 10px 16px;
                            text-align:left;
                            font-size:11px;
                            font-weight:700;
                            color:#9ca3af;
                            text-transform:uppercase;
                            letter-spacing:0.08em;
                            border-bottom: 1px solid #e5e7eb;
                            border-right: 1px solid #e5e7eb;
                            width:35%;
                          ">Field</th>
                          <th style="
                            padding: 10px 16px;
                            text-align:left;
                            font-size:11px;
                            font-weight:700;
                            color:#9ca3af;
                            text-transform:uppercase;
                            letter-spacing:0.08em;
                            border-bottom: 1px solid #e5e7eb;
                          ">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${tableRows}
                      </tbody>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="
                    background-color:#f9fafb;
                    padding: 20px 40px;
                    border-top: 1px solid #e5e7eb;
                    border-radius: 0 0 12px 12px;
                  ">
                    <p style="margin:0; font-size:12px; color:#9ca3af; text-align:center; line-height:1.6;">
                      This is an automated notification from the UniCredit Application Portal.<br/>
                      Do not reply to this email.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>

      </body>
      </html>`;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || '"UniCredit" <noreply@unicredit.com>',
      to: process.env.EMAIL_RECIPIENT || "info@unicredit.co.in",
      subject: `New Application Submission — ${submittedAt}`,
      html: htmlEmail,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to submit application" }, { status: 500 });
  }
}