function calculerCroissance(ancienCA, nouveauCA) {
  if (!ancienCA || ancienCA <= 0) return null;
  return (nouveauCA - ancienCA) / ancienCA;
}
function determinerStatut(croissance) {
  if (croissance === null) return "Inconnu";
  if (croissance > 0.2) return "Excellent";
  if (croissance < 0) return "Critique";
  return "Normal";
}
function appliquerPenaliteChurn(revenu, churnRate, mode) {
  if (churnRate <= 5 || mode === "Startup") return revenu;
  return revenu * 0.9;
}
function appliquerFraisServeurs(revenu, vues) {
  if (vues <= 1000000) return { revenu, frais: 0 };
  return { revenu: revenu - 500, frais: 500 };
}
function calculateKpi(data) {

  const { ancienCA, nouveauCA, churnRate, mode, vues } = data;

  const croissance = calculerCroissance(ancienCA, nouveauCA);

  const statut = determinerStatut(croissance);

  const revenuApresChurn = appliquerPenaliteChurn(nouveauCA, churnRate, mode);

  const { revenu, frais } = appliquerFraisServeurs(revenuApresChurn, vues);

  return {
    croissance:
      croissance === null ? "N/A" : Math.round(croissance * 100) + "%",
    statut,
    revenuProjete: Math.round(revenu),
    fraisServeurs: frais,
  };
}
module.exports = {
  calculateKpi,
  calculerCroissance,
  determinerStatut,
  appliquerPenaliteChurn,
  appliquerFraisServeurs,
};
