export async function generateAISummary(audit: any) {
  try {
    return `Your current AI tooling setup shows approximately $${audit.totalMonthlySavings} in potential monthly savings and $${audit.totalAnnualSavings} annually. Based on your selected tools and usage profile, we identified opportunities to reduce unnecessary spend through plan optimization and better-fit alternatives. Several tools appear over-provisioned relative to team size and use case. Additional savings may also be possible through discounted infrastructure credits and vendor consolidation strategies.`;
  } catch (error) {
    console.error(error);

    return "Optimization opportunities were identified in your AI tooling stack.";
  }
}