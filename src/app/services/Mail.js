const nodemailer = require('nodemailer')
const path = require('path')
const hbs = require('nodemailer-express-handlebars')
exphbs = require('express-handlebars')
const MailConfig = require('../../config/mail')

const transport = nodemailer.createTransport(MailConfig)
const viewPath = path.resolve(__dirname, '..', 'views', 'emails')
transport.use(
  'compile',
  hbs({
    viewEngine: exphbs.create({
      partialsDir: path.resolve(viewPath, 'partials')
    }),
    viewPath,
    extName: '.hbs'
  })
)

module.exports = transport
