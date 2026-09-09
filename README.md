# Seller Studio Website V0.5

Marketing website for Seller Studio built with Next.js 16, React 19, TypeScript and Tailwind CSS 4.

## What changed in V0.5
- Interactive Dashboard / Products / Analytics / Orders product showcase
- Mobile Seller Studio phone presentation
- Responsive mobile navigation
- Subtle motion and stronger section rhythm
- Real `/api/waitlist` endpoint
- UTM/source/referrer capture for early-access signups
- Supabase waitlist SQL schema and environment template

## Run locally
```powershell
cd C:\projects\seller_studio_web
npm run dev
```

## Enable real waitlist storage
1. Create/open the Supabase project you want to use for the marketing site.
2. Run `supabase_waitlist.sql` in Supabase SQL Editor.
3. Copy `.env.example` to `.env.local`.
4. Set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.
5. Restart `npm run dev`.

The service-role key is used only inside the server route. Do not prefix it with `NEXT_PUBLIC_` and do not expose it in browser code.

## Attribution captured
`source`, `medium`, `campaign`, `content`, `referrer`, and `landing_page` are saved with the signup so future Instagram/TikTok/Google campaigns can be measured.


## V0.5
- Replaces the illustrative phone UI with a real Seller Studio live-development screenshot.
- Adds an explicit live-build badge and development-data disclaimer to avoid mixing live test values with illustrative demo-shop figures.
- Adds premium device treatment and product-proof callouts.


## V0.7 brand update
- New approved Seller Studio gradient growth icon integrated into header and footer.
- New favicon and Apple-touch icon generated from the approved brand direction.
- Existing premium layout and conversion structure preserved.

## V0.8 social preview update
- New branded 1200x630 Open Graph image.
- Twitter/X large-card metadata.
- Canonical social URL points to https://www.getsellerstudio.com.
- Square branded social preview reference asset included.

## V0.9 header brand lockup
- Replaced the small icon + separate text treatment with the approved full Seller Studio horizontal logo.
- Header uses the full icon + Seller Studio + tagline lockup.
- Footer uses the same identity for stronger brand consistency.
- Standalone icon remains available for favicon/app/social use.
