import { AuditResult } from "@/lib/audit-engine";

interface Props {
  result: AuditResult;
}

export function AuditResults({ result }: Props) {
  return (
    <div className="mt-12 space-y-8">
      <div className="rounded-2xl border border-green-900 bg-green-950/30 p-8">
        <h2 className="text-3xl font-bold">
          Potential Savings Found
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-zinc-400">
              Monthly Savings
            </p>

            <p className="mt-2 text-5xl font-bold text-green-400">
              ${result.totalMonthlySavings}
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">
              Annual Savings
            </p>

            <p className="mt-2 text-5xl font-bold text-green-400">
              ${result.totalAnnualSavings}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {result.recommendations.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">
                  {item.tool}
                </h3>

                <p className="mt-2 text-zinc-400">
                  {item.recommendation}
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm text-zinc-500">
                  Monthly Savings
                </p>

                <p className="text-2xl font-bold text-green-400">
                  ${item.monthlySavings}
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-sm text-zinc-500">
                  Current Spend
                </p>

                <p className="mt-1 text-lg">
                  ${item.currentSpend}
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Recommended Spend
                </p>

                <p className="mt-1 text-lg">
                  ${item.recommendedSpend}
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Annual Savings
                </p>

                <p className="mt-1 text-lg text-green-400">
                  ${item.annualSavings}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-zinc-400">
              {item.reason}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}