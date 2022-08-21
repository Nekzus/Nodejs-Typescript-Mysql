import { Sequelize } from "sequelize";

const db = new Sequelize("node", "root", "1981", {
  host: "localhost",
  dialect: "mysql",
  define: { tableName: "usuarios" },
  // logging: false,
});

export default db;
