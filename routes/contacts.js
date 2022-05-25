const express = require('express')
const router = express.Router()
const {
    getContacts,
    getContact,
    addContact
} = require('../controllers/contacts')

router.get('/', getContacts)
router.get('/:id', getContact)
router.post('/', addContact)

module.exports = router