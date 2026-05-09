import { supabase } from "@/lib/supabase";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ReportPage({ params }: Props) {
  const { id } = await params;

  const { data } = await supabase
    .from("audits")
    .select("*")
    .eq("report_id", id)
    .single();

  if (!data) {
    return (
      <div className="min-h-screen bg-black p-10 text-white">
        Report not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-10 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold">
          Potential Savings Found
        </h1>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-green-900 bg-green-950 p-6">
            <p className="text-zinc-400">Monthly Savings</p>

            <h2 className="mt-2 text-5xl font-bold text-green-400">
              ${data.monthly_savings}
            </h2>
          </div>

          <div className="rounded-2xl border border-green-900 bg-green-950 p-6">
            <p className="text-zinc-400">Annual Savings</p>

            <h2 className="mt-2 text-5xl font-bold text-green-400">
              ${data.annual_savings}
            </h2>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          {data.recommendations.map((item: any, index: number) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">
                  {item.tool}
                </h3>

                <div className="text-right">
                  <p className="text-sm text-zinc-400">
                    Monthly Savings
                  </p>

                  <p className="text-3xl font-bold text-green-400">
                    ${item.monthlySavings}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-lg">
                {item.recommendation}
              </p>

              <p className="mt-2 text-zinc-400">
                {item.reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}