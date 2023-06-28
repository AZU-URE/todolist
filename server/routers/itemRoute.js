const express = require("express")
const router = express.Router()
const { getList, createItem, updateItem, deleteItem, getItem } = require('../controller/itemController')

router.get('/', getList)
router.get('/:id', getItem)
router.post('/', createItem)
router.patch('/', updateItem)
router.delete('/:id', deleteItem)


module.exports = router