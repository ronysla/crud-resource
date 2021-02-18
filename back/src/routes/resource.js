const { Router } = require('express')
const router = Router()
const { create, list, update, remove, details } = require('../controllers/resource')
router.route('/create').post(create)
router.route('/update/:id').put(update)
router.route('/:id').delete(remove)
router.route('/').get(list)
router.route('/:id').get(details)
module.exports = router