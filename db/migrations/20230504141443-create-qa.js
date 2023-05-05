"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("QAs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      question: {
        type: Sequelize.TEXT,
      },
      answ1: {
        type: Sequelize.TEXT,
      },
      answ2: {
        type: Sequelize.TEXT,
      },
      answ3: {
        type: Sequelize.TEXT,
      },
      answ4: {
        type: Sequelize.TEXT,
      },
      correctAnsw: {
        type: Sequelize.TEXT,
      },
      idTopic: {
        type: Sequelize.INTEGER,
        references: {
          model: "Topics",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("QAs");
  },
};
