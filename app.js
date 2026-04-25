const express = require('express');
const kpiRoutes = require('./routes/kpi');
const app = express();
app.use(express.json());
app.use('/api', kpiRoutes);
module.exports = app;
if (require.main === module) {
    app.listen(3000, () => console.log('Running on 3000'));
}