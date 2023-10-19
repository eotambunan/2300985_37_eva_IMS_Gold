"use strict";
const bcrypt = require("bcrypt")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
      const date = new Date();
      const password = "123"
      const hashPassword = await bcrypt.hash(password,10)

        await queryInterface.bulkInsert(
            "tb_users",
            [
                {
                    name: "Customer1",
                    email: "customer1@gmail.com",
                    password: hashPassword,
                    createdAt: date,
                    updatedAt: date,
                    role : 'customer'
            
                },
                {
                    name: "Admin1",
                    email: "admin1@gmail.com",
                    password: hashPassword,
                    createdAt: date,
                    updatedAt: date,
                    role : 'admin'            
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('tb_users', null, {});
    },
};
