const db = require("../models");
const Product = db.Product;

// Function to Create product
exports.create = (req, res) => {
  // Create new product object
  const productObj = {
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
    published: req.body.published,
    stock: req.body.stock,
    roast: req.body.roast,
  };

  // Insert product into DB and return data to user, excluding user ID
  Product.create(productObj)
    .then((data) => {
      res.send(data);
    })
    .catch((err) =>
      res.status(500).send({
        message:
          err.message || "An unknown error occured while creating a product",
      })
    );
};

// Function to find all products belonging to user
exports.findAll = (req, res) => {
  // find all products belonging to user and returns them back
  Product.findAll({
    attributes: [
      "name",
      "price",
      "image",
      "description",
      "published",
      "id",
      "stock",
      "roast",
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
};

// Function to find one product belonging to user, with product ID
exports.findOne = (req, res) => {
  // get the ID from request
  const id = req.params.id;

  // find product by id and user ID
  Product.findByPk(id, {
    attributes: [
      "name",
      "price",
      "image",
      "description",
      "published",
      "id",
      "stock",
      "roast",
    ],
  })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find product with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving product with id=" + id + err,
      });
    });
};
