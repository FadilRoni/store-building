const Product = require('./product')

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
}

const saveProduct = async (req, res) => {
    const product = new Product(req.body)
    try {
        const savedProduct = await product.save()
        res.status(201).json(savedProduct)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const updateProduct = async (req, res) => {
    const cekId = await Product.findById(req.params.id)
    if(!cekId) return res.status(404).json({
        message: 'Data tidak ditemukan',
    })
    try {
        const updateProduct = await Product.updateOne({
            _id: req.params.id
        },
        {
            $set: req.body
        })
        res.status(200).json({
            message: "Data berhasil di update"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const deleteProduct = async (req, res) => {
    const cekId = await Product.findById(req.params.id)
    if(!cekId) return res.status(404).json({
        message: 'Data tidak ditemukan',
    })
    try {
        const deleteProduct = await Product.deleteOne({
            _id: req.params.id
        })
        res.status(200).json({
            message: "Data berhasil dihapus"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = { getAllProducts, getProductById, saveProduct, updateProduct, deleteProduct }