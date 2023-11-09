"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        nama: "isal",
        alamat: "bubat",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "zain",
        alamat: "bojes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "paris",
        alamat: "logam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "ren",
        alamat: "moha",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
