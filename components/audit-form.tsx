"use client";

import { useEffect, useState } from "react";
import { pricingData } from "@/lib/pricing";
import { AuditFormData, ToolEntry, ToolName } from "@/types/audit";
import { generateAudit } from "@/lib/audit-engine";
import { AuditResults } from "./audit-results";

const toolOptions = Object.keys(pricingData) as ToolName[];

const defaultTool: ToolEntry = {
  tool: "Cursor",
  plan: "Pro",
  monthlySpend: 20,
  seats: 1,
};

export function AuditForm() {
  const [result, setResult] = useState<any>(null);

  const [formData, setFormData] = useState<AuditFormData>({
    teamSize: 5,
    primaryUseCase: "coding",
    tools: [defaultTool],
  });

  useEffect(() => {
    const saved = localStorage.getItem("audit-form");

    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("audit-form", JSON.stringify(formData));
  }, [formData]);

  const addTool = () => {
    setFormData({
      ...formData,
      tools: [...formData.tools, defaultTool],
    });
  };

  const updateTool = (
    index: number,
    field: keyof ToolEntry,
    value: string | number
  ) => {
    const updated = [...formData.tools];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    setFormData({
      ...formData,
      tools: updated,
    });
  };

  const runAudit = () => {
    const audit = generateAudit(formData.tools);

    setResult(audit);
  };

  return (
    <div className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
      <h2 className="text-2xl font-bold">Start Your AI Spend Audit</h2>

      <div className="mt-8 grid gap-6">
        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Team Size
          </label>

          <input
            type="number"
            value={formData.teamSize}
            onChange={(e) =>
              setFormData({
                ...formData,
                teamSize: Number(e.target.value),
              })
            }
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Primary Use Case
          </label>

          <select
            value={formData.primaryUseCase}
            onChange={(e) =>
              setFormData({
                ...formData,
                primaryUseCase: e.target.value,
              })
            }
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3"
          >
            <option value="coding">Coding</option>
            <option value="writing">Writing</option>
            <option value="research">Research</option>
            <option value="data">Data Analysis</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>

        {formData.tools.map((tool, index) => {
          const plans = Object.keys(pricingData[tool.tool]);

          return (
            <div
              key={index}
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <div className="grid gap-4 md:grid-cols-4">
                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Tool
                  </label>

                  <select
                    value={tool.tool}
                    onChange={(e) =>
                      updateTool(
                        index,
                        "tool",
                        e.target.value as ToolName
                      )
                    }
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3"
                  >
                    {toolOptions.map((toolName) => (
                      <option key={toolName} value={toolName}>
                        {toolName}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Plan
                  </label>

                  <select
                    value={tool.plan}
                    onChange={(e) =>
                      updateTool(index, "plan", e.target.value)
                    }
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3"
                  >
                    {plans.map((plan) => (
                      <option key={plan} value={plan}>
                        {plan}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Monthly Spend ($)
                  </label>

                  <input
                    type="number"
                    value={tool.monthlySpend}
                    onChange={(e) =>
                      updateTool(
                        index,
                        "monthlySpend",
                        Number(e.target.value)
                      )
                    }
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Seats
                  </label>

                  <input
                    type="number"
                    value={tool.seats}
                    onChange={(e) =>
                      updateTool(
                        index,
                        "seats",
                        Number(e.target.value)
                      )
                    }
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3"
                  />
                </div>
              </div>
            </div>
          );
        })}

        <button
          onClick={addTool}
          className="rounded-xl border border-zinc-700 px-6 py-3 hover:bg-zinc-800"
        >
          + Add Another Tool
        </button>

        <button
          onClick={runAudit}
          className="rounded-xl bg-white px-6 py-3 font-semibold text-black hover:bg-zinc-200"
        >
          Generate Audit Report
        </button>

        {result && <AuditResults result={result} />}
      </div>
    </div>
  );
}