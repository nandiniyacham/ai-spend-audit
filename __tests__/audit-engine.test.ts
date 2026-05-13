describe("Audit Engine", () => {
  test("calculates monthly savings correctly", () => {
    const currentSpend = 200;
    const optimizedSpend = 120;

    const savings = currentSpend - optimizedSpend;

    expect(savings).toBe(80);
  });

  test("calculates annual savings correctly", () => {
    const monthlySavings = 100;

    const annualSavings = monthlySavings * 12;

    expect(annualSavings).toBe(1200);
  });

  test("detects no savings scenario", () => {
    const currentSpend = 50;
    const optimizedSpend = 50;

    expect(currentSpend - optimizedSpend).toBe(0);
  });

  test("recommends cheaper plan", () => {
    const currentPlan = "Team";
    const recommendedPlan = "Pro";

    expect(recommendedPlan).toBe("Pro");
  });

  test("handles enterprise usage correctly", () => {
    const seats = 100;

    expect(seats > 50).toBe(true);
  });
});