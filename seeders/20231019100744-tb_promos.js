"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "tb_promos",
            [
                {
                    name: "Promo 1",
                    promo_banner: "promo1.jpg",
                },
                {
                    name: "Promo 2",
                    promo_banner: "promo2.jpg",
                },
                {
                    name: "Promo 3",
                    promo_banner: "promo3.jpg",
                },
                {
                    name: "Promo 4",
                    promo_banner: "promo4.jpg",
                },
                {
                    name: "Promo 5",
                    promo_banner: "promo5.jpg",
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('tb_promos', null, {});    },
};
