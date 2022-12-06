const { Router } = require('express');
const controller = require('./controller');


const router = Router();

router.get('/', controller.getGans);
router.get('/:id', controller.getGanById);

router.post('/', controller.addGan);

// router.delete('/:id', controller.removeGan);


module.exports = router;