// "use strict";

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.bulkInsert(
//       "Users",
//       [
//         {
//           name: "Luffy",
//           username: "Muguiwara",
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Zoro",
//           username: "PirateHunter",
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//         {
//           name: "Sanji",
//           username: "BlackLeg",
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         },
//       ],
//       {}
//     );
//   },

//   async down(queryInterface, Sequelize) {
//     await queryInterface.bulkDelete("Users", null, {});
//   },
// };

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
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
      {
        name: "Sanji",
        username: "BlackLeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const insertedUsers = await queryInterface.bulkInsert("Users", users, {});

    const userIds = insertedUsers.map((user) => user.id);

    const posts = [
      {
        text: "I wanna be pirate king",
        userId: userIds[0],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "Swordsman in search of the world's best sword",
        userId: userIds[1],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "The cook with a passion for all things delicious",
        userId: userIds[2],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const insertedPosts = await queryInterface.bulkInsert("Posts", posts, {});

    const postsIds = insertedPosts.map((post) => post.id);

    const comments = [
      {
        text: "Comment 1",
        userId: userIds[0],
        postId: postsIds[0],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "Comment 2",
        userId: userIds[1],
        postId: postsIds[1],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "Comment 3",
        userId: userIds[2],
        postId: postsIds[2],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Comments", comments, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Posts", null, {});
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
