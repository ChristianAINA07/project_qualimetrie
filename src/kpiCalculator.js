function calculateKpi(data) {
    const { ancienCA, nouveauCA, churnRate, mode, vues } = data;
    let croissance = 0;
    let statut = '';
    let revenuProjete = nouveauCA;
    let fraisServeurs = 0;
    if (ancienCA && ancienCA > 0) {
        croissance = (nouveauCA - ancienCA) / ancienCA;
        if (croissance > 0.20) {
            statut = 'Excellent';
        } else {
            if (croissance < 0) {
                statut = 'Critique';
            } else {
                statut = 'Normal';
            }
        }
    } else {
        statut = 'Inconnu';
    }
    if (churnRate > 5) {
        if (mode === 'Startup') {
            // ignorer la penalite
        } else {
            revenuProjete = revenuProjete * 0.90;
        }
    }
    if (vues > 1000000) {
        fraisServeurs = 500;
        revenuProjete = revenuProjete - fraisServeurs;
    }
    return {
        croissance: Math.round(croissance * 100) + '%',
        statut,
        revenuProjete: Math.round(revenuProjete),
        fraisServeurs,
    };
}
module.exports = { calculateKpi };