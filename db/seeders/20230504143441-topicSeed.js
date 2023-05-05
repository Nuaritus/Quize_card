"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          topicName: "Служебный роман",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicName: "Джокер",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topicName: "Омерзительная восьмерка",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
