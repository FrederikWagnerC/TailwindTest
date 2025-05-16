"use strict";
const fs = require("fs");
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let p_word = await bcrypt.hash(
      JSON.parse(fs.readFileSync("./data/users.json", "utf-8")).users[0]
        .password,
      15
    );

    let data = JSON.parse(
      fs.readFileSync("./data/users.json", "utf-8")
    ).users.map((el) => {
      delete el.id;
      el.created_at = new Date();
      el.updated_at = new Date();
      el.password = p_word;
      return el;
    });
    await queryInterface.bulkInsert("Users", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
