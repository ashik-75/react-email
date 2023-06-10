import Email from "@/components/Email";
import { NextRequest, NextResponse } from "next/server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);

  try {
    if (body && body.name && body.to) {
      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: body.to,
        subject: "Hello World",
        react: Email({ name: body.name }),
      });
      return NextResponse.json(data);
    } else {
      return new NextResponse(null, {
        status: 400,
        statusText: "data not found",
      });
    }
  } catch (error) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Something went Wrong!",
    });
  }
}
