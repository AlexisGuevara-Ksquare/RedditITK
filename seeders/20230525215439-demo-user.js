"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Luffy",
          username: "Muguiwara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zoro",
          username: "PirateHunter",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          text: "Where is the One Piece?",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          text: "Let's go and find it",
          userId: 2,
          postId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Posts", null, {});
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
