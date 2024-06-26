const mongoose = require('mongoose')
const mongoPaginate = require('mongoose-paginate-v2')

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    category: {
            type: String,
            required: true,
            enum: ['salado', 'dulce']
        },
    stock: {
        type: Number,
        default: 10
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})


ProductsSchema.plugin(mongoPaginate)

const Product = mongoose.model('Product', ProductsSchema)

module.exports = Product