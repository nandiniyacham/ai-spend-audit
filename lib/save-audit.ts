import { supabase } from "./supabase";
import { v4 as uuidv4 } from "uuid";

export async function saveAudit(data: any, result: any) {
  try {
    const reportId = uuidv4();

    const { error } = await supabase.from("audits").insert([
      {
        report_id: reportId,
        tools: data.tools,
        team_size: data.teamSize,
        primary_use_case: data.primaryUseCase,
        monthly_savings: result.totalMonthlySavings,
        annual_savings: result.totalAnnualSavings,
        recommendations: result.recommendations,
      },
    ]);

    if (error) {
      console.error("SUPABASE ERROR:", error);

      return null;
    }

    return reportId;
  } catch (err) {
    console.error("SAVE AUDIT ERROR:", err);

    return null;
  }
}