const nodemailer = require('nodemailer')
const MailConfig = require('../../config/mail')

const transport = nodemailer.createTransport(MailConfig)

module.exports = transport
