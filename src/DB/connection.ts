import { Sequelize } from "sequelize";

const DB_NAME = "reddit";
const DB_USER = "postgres";
const DB_PASS = "root";
const DB_HOST = "localhost";

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "postgres",
});

export const dbConnect = async () => {
  try {
    await sequelize.sync();
    console.log("Succesful connection");
  } catch (error) {
    console.error("Connection to the DB fail: ", error);
  }
};
