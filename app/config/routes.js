let config = require('./../config/config');
let ctrl = require('./../controllers/UseController');

module.exports = function(app) {

  // route category
  app.route(config.DEFAULT_ROUTE + 'category')
      .get(ctrl.category.getAllCate)
      .post(ctrl.category.createCate);

  // route products
  app.route(config.DEFAULT_ROUTE + 'products')
    .get(ctrl.products.get)
    .post(ctrl.products.store);

  app.route(config.DEFAULT_ROUTE + 'products/:productId')
    .get(ctrl.products.detail)
    .put(ctrl.products.update)
    .delete(ctrl.products.delete);
};
