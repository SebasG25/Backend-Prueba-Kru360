const { contactsModel } = require('../models')

/**
 * It's an async function that gets all the contacts from the database and sends them back to the
 * client.
 * @param req - The request object.
 * @param res - The response object.
 */
const getContacts = async (req, res) => {
    const data = await contactsModel.find({})
    res.send({ data })
}

/**
 * It takes a request and a response, and then it finds a contact by id, and then it sends the data
 * back to the client.
 * @param req - request
 * @param res - the response object
 */
const getContact = async (req, res) => {
    const { id } = req.params
    const data = await contactsModel.findById(id)
    res.send({ data })
}

/**
 * It takes the request body, and creates a new contact in the database.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
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