import { ToolEntry } from "@/types/audit";

export interface AuditRecommendation {
  tool: string;
  currentSpend: number;
  recommendedSpend: number;
  monthlySavings: number;
  annualSavings: number;
  recommendation: string;
  reason: string;
}

export interface AuditResult {
  totalMonthlySavings: number;
  totalAnnualSavings: number;
  recommendations: AuditRecommendation[];
}

export function generateAudit(tools: ToolEntry[]): AuditResult {
  const recommendations: AuditRecommendation[] = [];

  let totalMonthlySavings = 0;

  tools.forEach((tool) => {
    let recommendedSpend = tool.monthlySpend;
    let recommendation = "Current plan looks optimized.";
    let reason = "Your current usage appears aligned with your plan.";

    if (
      tool.tool === "ChatGPT" &&
      tool.plan === "Team" &&
      tool.seats <= 2
    ) {
      recommendedSpend = 20 * tool.seats;

      recommendation = "Downgrade to ChatGPT Plus";

      reason =
        "ChatGPT Team pricing becomes inefficient for very small teams.";

    } else if (
      tool.tool === "Cursor" &&
      tool.plan === "Business" &&
      tool.seats <= 3
    ) {
      recommendedSpend = 20 * tool.seats;

      recommendation = "Switch to Cursor Pro";

      reason =
        "Cursor Business features are usually unnecessary for teams under 4 users.";

    } else if (
      tool.tool === "Claude" &&
      tool.plan === "Max"
    ) {
      recommendedSpend = 20 * tool.seats;

      recommendation = "Consider Claude Pro";

      reason =
        "Claude Max is expensive unless your team consistently hits heavy usage limits.";

    } else if (
      tool.tool === "GitHub Copilot" &&
      tool.plan === "Enterprise" &&
      tool.seats < 10
    ) {
      recommendedSpend = 19 * tool.seats;

      recommendation = "Downgrade to Copilot Business";

      reason =
        "Enterprise Copilot pricing rarely makes sense for smaller engineering teams.";
    }

    const monthlySavings = Math.max(
      tool.monthlySpend - recommendedSpend,
      0
    );

    const annualSavings = monthlySavings * 12;

    totalMonthlySavings += monthlySavings;

    recommendations.push({
      tool: tool.tool,
      currentSpend: tool.monthlySpend,
      recommendedSpend,
      monthlySavings,
      annualSavings,
      recommendation,
      reason,
    });
  });

  return {
    totalMonthlySavings,
    totalAnnualSavings: totalMonthlySavings * 12,
    recommendations,
  };
}