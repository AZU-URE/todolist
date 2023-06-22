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
    const { id, title } = req.body;
    const newItem = Item.build({ id, title })
    await newItem.save()
    res.status(200).json("done")
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
    try {
        const { id } = req.body;
        const item = await Item.findOne({
            where: {
                id: id
            }
        })

        // console.log(item);
        await item.destroy()
        res.status(201).json({ msg: `deleted successfully` })

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