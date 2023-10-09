'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("tb_users","role",{
      type: Sequelize.STRING,
      allowNull : true
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("tb_users","role")
  }
};
