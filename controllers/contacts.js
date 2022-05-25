const { contactsModel } = require('../models')


const getContacts = async (req, res) => {
    const data = await contactsModel.find({})
    res.send({ data })
}

const getContact = async (req, res) => {
    const { id } = req
    const data = await contactsModel.findById(id)
    res.send({data})
}

const addContact = async (req, res) => {
    const { body } = req
    const data = await contactsModel.create(body)
    res.send({data})
}

const updateContact = (req, res) => {

}

const deleteContact = (req, res) => {

}

module.exports = { getContacts, getContact, addContact, updateContact, deleteContact }