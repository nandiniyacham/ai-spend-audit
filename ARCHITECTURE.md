# Architecture

The application uses a Next.js frontend with Supabase as the backend database.

Core architecture:

* Frontend UI built with React and Tailwind CSS
* Audit recommendation engine runs client-side
* Supabase stores audits and leads
* Dynamic report pages generated using UUID routes
* Local storage used for temporary persistence

Main modules:

* Audit form
* Recommendation engine
* Report generator
* Lead capture system

Data flow:

1. User submits audit form
2. Recommendation engine calculates savings
3. Audit report saved to Supabase
4. Dynamic report page generated
5. Lead information stored for follow-up
