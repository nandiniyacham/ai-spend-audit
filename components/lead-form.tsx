"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface Props {
  reportId: string;
}

export function LeadForm({ reportId }: Props) {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    company: "",
    role: "",
  });

  const submitLead = async () => {
    const { error } = await supabase.from("leads").insert([
      {
        email: formData.email,
        company: formData.company,
        role: formData.role,
        report_id: reportId,
      },
    ]);

    if (!error) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="mt-10 rounded-2xl border border-green-900 bg-green-950 p-6">
        <h2 className="text-2xl font-bold text-green-400">
          Audit Saved Successfully
        </h2>

        <p className="mt-2 text-zinc-300">
          Credex will reach out if additional savings opportunities exist.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-2xl font-bold">
        Get Your Full Audit Report
      </h2>

      <p className="mt-2 text-zinc-400">
        Save your audit and receive future optimization alerts.
      </p>

      <div className="mt-6 grid gap-4">
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
        />

        <input
          type="text"
          placeholder="Company"
          value={formData.company}
          onChange={(e) =>
            setFormData({
              ...formData,
              company: e.target.value,
            })
          }
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
        />

        <input
          type="text"
          placeholder="Role"
          value={formData.role}
          onChange={(e) =>
            setFormData({
              ...formData,
              role: e.target.value,
            })
          }
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
        />

        <button
          onClick={submitLead}
          className="rounded-xl bg-white px-6 py-3 font-semibold text-black"
        >
          Save Audit
        </button>
      </div>
    </div>
  );
}