// app/api/env/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const hasUrl  = !!process.env.NEXT_PUBLIC_SUPABASE_URL
  const hasAnon = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  return NextResponse.json({
    ok: hasUrl && hasAnon,
    NEXT_PUBLIC_SUPABASE_URL_present: hasUrl,
    NEXT_PUBLIC_SUPABASE_ANON_KEY_present: hasAnon,
    url_preview: hasUrl
      ? String(process.env.NEXT_PUBLIC_SUPABASE_URL).slice(0, 35) + '...'
      : null,
    env: process.env.VERCEL_ENV || 'unknown'
  })
}
