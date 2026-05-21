import { NextResponse } from "next/server";
import { getNewsletters } from "@/lib/wordpress";
import { newsletters as staticNewsletters } from "@/data/newsletters";

export const revalidate = 60;

export async function GET() {
  const wpNewsletters = await getNewsletters(12);
  const wpSlugs = new Set(wpNewsletters.map(n => n.slug));
  const data = [...wpNewsletters, ...staticNewsletters.filter(n => !wpSlugs.has(n.slug))];
  return NextResponse.json(data);
}
