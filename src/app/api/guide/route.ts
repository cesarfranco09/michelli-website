import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const GUIDE_PATH = "/assets/bedtime-foundations-guide.pdf";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function guideEmailHtml(downloadUrl: string) {
  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background-color:#FFF9F0;font-family:Georgia,'Times New Roman',serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FFF9F0;padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background-color:#FFFDFB;border-radius:16px;overflow:hidden;border:1px solid #E8E2D5;">
            <tr>
              <td style="background-color:#2B3A52;padding:36px 40px;text-align:center;">
                <p style="margin:0;color:#E8C96A;font-size:12px;letter-spacing:4px;text-transform:uppercase;font-family:Helvetica,Arial,sans-serif;">Dreamy Nights</p>
                <p style="margin:6px 0 0;color:#FFFDFB;font-size:26px;">Your Free Sleep Guide is Here 🌙</p>
              </td>
            </tr>
            <tr>
              <td style="padding:40px;">
                <p style="margin:0 0 16px;color:#4A4A4A;font-size:16px;line-height:1.6;">Hi there,</p>
                <p style="margin:0 0 16px;color:#4A4A4A;font-size:16px;line-height:1.6;">
                  Thank you for downloading <strong>Bedtime Foundations</strong> — my free guide to
                  making naps and bedtime routines more predictable.
                </p>
                <p style="margin:0 0 28px;color:#4A4A4A;font-size:16px;line-height:1.6;">
                  Inside you'll find gentle, practical steps you can start using tonight.
                </p>
                <table role="presentation" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto 28px;">
                  <tr>
                    <td style="background-color:#D4A843;border-radius:999px;">
                      <a href="${downloadUrl}" style="display:inline-block;padding:16px 36px;color:#1A2636;font-size:14px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;text-decoration:none;font-family:Helvetica,Arial,sans-serif;">
                        Download the Guide
                      </a>
                    </td>
                  </tr>
                </table>
                <p style="margin:0 0 16px;color:#4A4A4A;font-size:16px;line-height:1.6;">
                  When you're ready for one-on-one support, I'd love to help — book a free
                  15-minute consultation any time.
                </p>
                <p style="margin:0;color:#4A4A4A;font-size:16px;line-height:1.6;">
                  Sweet dreams,<br />
                  <strong>Michelli</strong><br />
                  <span style="color:#7A8A9A;font-size:14px;">IPSP Certified Pediatric Sleep Consultant</span>
                </p>
              </td>
            </tr>
            <tr>
              <td style="background-color:#F0F4F8;padding:20px 40px;text-align:center;">
                <p style="margin:0;color:#7A8A9A;font-size:12px;font-family:Helvetica,Arial,sans-serif;">
                  Dreamy Nights Sleep Consulting · Virtual Support Worldwide
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(request: NextRequest) {
  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  const subscriberEmail = email.trim();

  // When the email service isn't configured yet, tell the client to fall
  // back to an instant in-browser download so the form still delivers.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ delivery: "download", url: GUIDE_PATH });
  }

  const resend = new Resend(apiKey);
  const origin = request.nextUrl.origin;
  const downloadUrl = `${origin}${GUIDE_PATH}`;

  // TODO: Once the real domain is verified in Resend, set GUIDE_FROM_EMAIL to
  // something like "Michelli <michelli@dreamynightsconsulting.com>".
  const from =
    process.env.GUIDE_FROM_EMAIL || "Dreamy Nights <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: subscriberEmail,
    subject: "Your free guide: Bedtime Foundations 🌙",
    html: guideEmailHtml(downloadUrl),
  });

  if (error) {
    console.error("Guide email failed:", error);
    // Don't strand the visitor — hand them the direct download instead.
    return NextResponse.json({ delivery: "download", url: GUIDE_PATH });
  }

  // Let Michelli know she has a new lead (best-effort; ignore failures).
  const notifyTo = process.env.GUIDE_NOTIFY_EMAIL;
  if (notifyTo) {
    resend.emails
      .send({
        from,
        to: notifyTo,
        subject: `New guide download: ${subscriberEmail}`,
        text: `${subscriberEmail} just requested the Bedtime Foundations guide from the website.`,
      })
      .catch(() => {});
  }

  return NextResponse.json({ delivery: "email" });
}
