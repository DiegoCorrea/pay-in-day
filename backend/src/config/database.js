const mongoose  = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/payinday')
mongoose.Error.messages.general.required = "O atributo '{PATH}' eh obrigatorio"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado eh menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado eh maior que o limite maximo de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não eh atributo de '{PATH}'."
