
import { DataSource } from "typeorm";
import UserEntity from "../entities/UserEntity";
import envs from "./environment-vars";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: envs.mysqlHost,
  port: Number(envs.mysqlPort),
  username: envs.mysqlUser,
  password: envs.mysqlPassword,
  database: envs.mysqlDataBase,
  synchronize: envs.mysqlSync,
  logging: envs.ENVIRONMENT === "dev" ? true : false,
  entities: [
    UserEntity,
  ]
});

export const connectDB = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to the DB", error);
    process.exit(1);
  }
}