import { NextResponse } from "next/server";
import { getNewsletters } from "@/lib/wordpress";
import { newsletters as staticNewsletters } from "@/data/newsletters";

export const revalidate = 60;

export async function GET() {
  const wpNewsletters = await getNewsletters(12);
  const data = wpNewsletters.length > 0 ? wpNewsletters : staticNewsletters;
  return NextResponse.json(data);
}
