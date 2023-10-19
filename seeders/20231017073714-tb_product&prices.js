'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const date = new Date()
      await queryInterface.bulkInsert('tb_products', [
        {
        title: 'Book 1',
        writer: 'John 1',
        category : 'Novel',
        year : '2020',
        price : '50000',
        synopsis : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minus, cumque obcaecati maiores beatae optio quibusdam nobis nihil sint vitae assumenda. Quod nemo pariatur error',
        image : "1.jpg",
        createdAt: date,
        updatedAt: date,
        },
        {
        title: 'Book 2',
        writer: 'John 2',
        category : 'Novel',
        year : '2020',
        price : '50000',
        synopsis : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minus, cumque obcaecati maiores beatae optio quibusdam nobis nihil sint vitae assumenda. Quod nemo pariatur error',
        image : "2.jpg",
        createdAt: date,
        updatedAt: date,
        },
        {
        title: 'Book 3',
        writer: 'John 3',
        category : 'Comic',
        year : '2020',
        price : '50000',
        synopsis : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minus, cumque obcaecati maiores beatae optio quibusdam nobis nihil sint vitae assumenda. Quod nemo pariatur error',
        image : "3.jpg",
        createdAt: date,
        updatedAt: date,
        },
        {
        title: 'Book 4',
        writer: 'John 4',
        category : 'Comic',
        year : '2020',
        price : '50000',
        synopsis : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minus, cumque obcaecati maiores beatae optio quibusdam nobis nihil sint vitae assumenda. Quod nemo pariatur error',
        image : "4.jpg",
        createdAt: date,
        updatedAt: date,
        },
        {
        title: 'Book 5',
        writer: 'John 5',
        category : 'Comic',
        year : '2020',
        price : '50000',
        synopsis : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minus, cumque obcaecati maiores beatae optio quibusdam nobis nihil sint vitae assumenda. Quod nemo pariatur error',
        image : "5.jpg",
        createdAt: date,
        updatedAt: date,
        },
      ]);
      await queryInterface.bulkInsert('tb_prices', [
        {
        product_id: 1,
        normal_price: 50000,
        discount: 10,
        price: 45000,
        createdAt: date,
        updatedAt: date,
        },
        {
        product_id: 2,
        normal_price: 60000,
        price: 60000,
        createdAt: date,
        updatedAt: date,
        },
        {
        product_id: 3,
        normal_price: 70000,
        price: 70000,
        createdAt: date,
        updatedAt: date,
        },
        {
        product_id: 4,
        normal_price: 80000,
        price: 80000,
        createdAt: date,
        updatedAt: date,
        },
        {
        product_id: 5,
        normal_price: 90000,
        price: 90000,
        createdAt: date,
        updatedAt: date,
        },
      ]);



    
  },
  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('tb_products', null, {});
     await queryInterface.bulkDelete('tb_prices', null, {});
  }
};
