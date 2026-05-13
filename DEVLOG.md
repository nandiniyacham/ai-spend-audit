## Day 1 — 2026-05-07

**Hours worked:** 4

**What I did:**
- Initialized Next.js project with TypeScript and Tailwind
- Built initial landing page
- Installed shadcn/ui components
- Configured Supabase backend
- Created audit database schema
- Started project documentation structure

**What I learned:**
- How Next.js App Router works
- How Supabase tables are created using SQL
- How Tailwind utility classes work

**Blockers / what I'm stuck on:**
- Still designing the audit recommendation logic

**Plan for tomorrow:**
- Build spend input form
- Add localStorage persistence
- Start implementing audit engine logic

## Day 2 — 2026-05-08

**Hours worked:** 5

**What I did:**
- Built dynamic AI spend audit form
- Added pricing data structure for major AI tools
- Implemented localStorage persistence
- Created audit recommendation engine
- Added savings calculations and results UI
- Built recommendation cards with annual/monthly savings

**What I learned:**
- How React state updates dynamic form arrays
- How audit/recommendation engines can be separated into reusable logic
- How localStorage persistence works in Next.js client components

**Blockers / what I'm stuck on:**
- Need stronger recommendation logic for API pricing comparisons
- Need better differentiation between optimal vs overspending users

**Plan for tomorrow:**
- Add AI-generated personalized summaries
- Save audit reports to Supabase
- Create shareable public report URLs
- Improve recommendation quality

## Day 3 — 2026-05-09

**Hours worked:** 5

**What I did:**  
Built the shareable audit report system using Supabase. Added backend persistence for audit results, dynamic report URLs, and report retrieval by UUID. Fixed database schema issues, Next.js dynamic routing problems, and report rendering bugs.

**What I learned:**  
Learned how dynamic routes work in Next.js App Router, how Supabase permissions and table schemas affect inserts, and how to debug API/database integration issues using browser console logs.

**Blockers / what I'm stuck on:**  
Had issues with Supabase insert permissions and report persistence after refresh. Also faced Next.js dynamic route async params errors.

**Plan for tomorrow:**  
Add AI-generated personalized summaries, lead capture forms, and email storage flow.

## Day 4 — 2026-05-10

**Hours worked:** 5

**What I did:**  
Implemented AI-generated audit summaries and a lead capture system. Added a new leads table in Supabase, created a reusable lead form component, and connected the report flow to persistent lead storage. Also improved report presentation with personalized summaries and success states.

**What I learned:**  
Learned how client/server boundaries work in Next.js, especially around environment variables and secret API keys. Improved understanding of Supabase insert flows and reusable component patterns.

**Blockers / what I'm stuck on:**  
Initially tried using OpenAI directly in client-side components, which caused environment variable exposure issues. Replaced with a temporary server-safe summary approach.

**Plan for tomorrow:**  
Improve UI polish, add charts/analytics visualizations, create better onboarding UX, and prepare deployment/documentation.

## Day 5 — 2026-05-11

**Hours worked:** 4

**What I did:**  
Improved the overall dashboard and report experience by adding analytics visualizations using Recharts. Enhanced the SaaS-style layout of the report page, improved component ordering, refined UI spacing, and polished the lead capture flow for a more production-ready experience.

**What I learned:**  
Learned how to integrate Recharts into a Next.js application and structure reusable dashboard components. Improved understanding of UI hierarchy and user flow optimization in SaaS products.

**Blockers / what I'm stuck on:**  
Initially placed components in incorrect layout hierarchy, causing lead forms to render inside recommendation cards. Fixed by restructuring component placement.

**Plan for tomorrow:**  
Add copy/share functionality, loading states, final UI polish, deployment setup, and prepare project demo documentation.

## Day 6 — 2026-05-12

**Hours worked:** 3

**What I did:**  
Added report sharing functionality with copy-link support, improved report loading behavior, refined dashboard UX, and improved overall SaaS-style experience.

**What I learned:**  
Learned how to handle client-side rendering and browser clipboard APIs inside Next.js applications.

**Blockers / what I'm stuck on:**  
Initially mixed server and client component logic, which caused rendering issues. Fixed by restructuring the report page into a client-side flow.

**Plan for tomorrow:**  
Prepare deployment, final testing, and demo recording.

## Day 7 — 2026-05-13

**Hours worked:** 3

**What I did:**  
Deployed the AI Spend Audit project to Vercel, configured environment variables, fixed production deployment issues, and tested all major flows including audit generation, report sharing, persistence, and lead capture.

**What I learned:**  
Learned how production deployment differs from local development, how environment variables work in Vercel, and how to debug production build errors in Next.js applications.

**Blockers / what I'm stuck on:**  
Faced deployment build issues related to module resolution and dependency handling. Resolved them by verifying dependencies, clearing build cache, and testing production builds locally.

**Plan for tomorrow:**  
Prepare final demo recording, submission assets, and interview explanations.