const {Product} = require('../models');
const categories = ['appliances', 'pets', 'home goods', 'cookware', 'other']

module.exports.renderProfile = async function(req, res) {
    const product = await Product.findByPk(
        req.params.id
    );
    res.render('products/profile', {product});
}

module.exports.renderEditForm = async function(req, res) {
    const product = await Product.findByPk(
        req.params.id
    );
    res.render('products/edit', {product, categories});
}