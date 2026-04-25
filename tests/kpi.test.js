const { calculateKpi } = require("../src/kpiCalculator");
describe("calculateKpi", () => {
  test("croissance > 20% -> statut Excellent", () => {
    const r = calculateKpi({
      ancienCA: 100,
      nouveauCA: 125,
      churnRate: 0,
      mode: "",
      vues: 0,
    });
    expect(r.statut).toBe("Excellent");
  });
  test("croissance < 0 -> statut Critique", () => {
    const r = calculateKpi({
      ancienCA: 100,
      nouveauCA: 80,
      churnRate: 0,
      mode: "",
      vues: 0,
    });
    expect(r.statut).toBe("Critique");
  });
  test("croissance normale -> statut Normal", () => {
    const r = calculateKpi({
      ancienCA: 100,
      nouveauCA: 110,
      churnRate: 0,
      mode: "",
      vues: 0,
    });
    expect(r.statut).toBe("Normal");
  });
  test("ancienCA = 0 -> statut Inconnu", () => {
    const r = calculateKpi({
      ancienCA: 0,
      nouveauCA: 100,
      churnRate: 0,
      mode: "",
      vues: 0,
    });
    expect(r.statut).toBe("Inconnu");
  });
  test("churn > 5% -> revenu reduit de 10%", () => {
    const r = calculateKpi({
      ancienCA: 100,
      nouveauCA: 200,
      churnRate: 6,
      mode: "",
      vues: 0,
    });
    expect(r.revenuProjete).toBe(180);
  });
  test("mode Startup -> churn ignore", () => {
    const r = calculateKpi({
      ancienCA: 100,
      nouveauCA: 200,
      churnRate: 6,
      mode: "Startup",
      vues: 0,
    });
    expect(r.revenuProjete).toBe(200);
  });
  test("vues > 1M -> frais serveurs 500 deduits", () => {
    const r = calculateKpi({
      ancienCA: 100,
      nouveauCA: 1000,
      churnRate: 0,
      mode: "",
      vues: 1500000,
    });
    expect(r.fraisServeurs).toBe(500);
    expect(r.revenuProjete).toBe(500);
  });
});
