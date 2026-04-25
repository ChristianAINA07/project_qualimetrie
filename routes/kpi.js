const express = require('express');
const router = express.Router();
const { calculateKpi } = require('../src/kpiCalculator');

router.post('/calculate-kpi', (req, res) => {
    try {
        const result = calculateKpi(req.body);
        res.json(result);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

module.exports = router;