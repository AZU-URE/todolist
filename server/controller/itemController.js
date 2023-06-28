const Item = require("../models/Item")

const getList = async (req, res) => {
    try {
        const items = await Item.findAll();
        res.status(200).json(items)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
    // res.json(Item)
    // console.log("inside get");
}

const createItem = async (req, res) => {
    console.log(req.body);
    const { id, title } = req.body;
    const newItem = Item.build({ id, title })
    await newItem.save()
    const items = await Item.findAll()
    res.status(200).json({ itemArray: items, msg: "done" })
}
const updateItem = async (req, res) => {
    try {
        const { id, title } = req.body;
        const item = await Item.findOne({
            where: {
                id: id
            }
        })
        item.title = title
        await item.save()
        res.status(201).json({ msg: `updated successfully` })

    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}
const deleteItem = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const item = await Item.findOne({
            where: {
                id: id
            }
        })

        // console.log(item);
        await item.destroy()
        const items = await Item.findAll()
        res.status(201).json({ msg: `deleted successfully`, itemArray: items })

    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}
const getItem = async (req, res) => {
    const { id } = req.params
    const item = await Item.findOne({
        where: {
            id: id
        }
    })
    res.status(201).json(item)

}

module.exports = { getList, createItem, updateItem, deleteItem, getItem }