import { AuditForm } from "@/components/audit-form";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-400">
            AI Spend Audit
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Stop overpaying for AI tools.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            Get an instant audit of your AI stack, uncover wasted spend,
            and discover cheaper alternatives for your team.
          </p>
        </div>

        <AuditForm />
      </section>
    </main>
  );
}