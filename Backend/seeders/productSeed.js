"use strict";
const fs = require("fs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = JSON.parse(
      fs.readFileSync("./data/products.json", "utf-8")
    ).products.map((el) => {
      delete el.id;
      el.created_at = new Date();
      el.updated_at = new Date();
      return el;
    });
    await queryInterface.bulkInsert("Products", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
