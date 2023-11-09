"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Books", [
      {
        judul: "Harry Potter and The Prisoner of Azkaban",
        penerbit: "Bhuana Ilmu Populer",
        deskripsi:
          "Sirius Black yang kabur dari penjara Azkaban ternyata mengincar Harry dan membuat Kementrian Sihir mengirimkan Dementor dari Azkaban untuk berpatroli di Hogwarts. Saat tahun ketiga Harry bersekolah, ia mendapatkan ancaman maut dan akhirnya ia mengetahui fakta baru tentang masa lalunya. Ia juga bertemu dan bertatap muka dengan pelayan Pangeran Kegelapan yang paling setia.",
        gambar: "Gryffindor.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Books", null, {});
  },
};
