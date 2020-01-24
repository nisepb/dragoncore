const { Rpouter } = require('express');

const router = new router();

router.get('/', (req, res) => {
    res.json({ generation: req.app.locals.engine.generation});
})

module.exports = router;