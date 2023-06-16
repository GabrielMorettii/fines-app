import "reflect-metadata";
import "express-async-errors";
import "@shared/container";
import "dotenv/config";

import express, { Express } from "express";
import cors from 'cors'

import { errorHandler } from "./middlewares/ErrorHandler";
import { mainRouter } from "../http/routes";
import { prisma } from "@libs/prisma";

class AppController {
  public express: Express;
  private serverListener!: import("http").Server;

  constructor() {
    process.on("unhandledRejection", (error) => {
      console.error("unhandledRejection:", error);
    });

    process.on("uncaughtException", (error, origin) => {
      console.error(`${origin}:`, error);
    });

    process.on("SIGINT", async (code) => await this.gracefulShutdown(code));

    process.on("SIGTERM", async (code) => await this.gracefulShutdown(code));

    process.on("exit", (code) => {
      console.info(`Successfully exited with code ${code}.`);
    });

    this.express = express();

    this.express.use(express.urlencoded({ extended: true }));

    this.express.use(express.json());

    this.express.use(cors());

    this.express.use(mainRouter);

    this.express.use(errorHandler);
  }

  private async gracefulShutdown(code: string) {
    console.info(`${code} exit signal received!`);

    console.log("Closing HTTP server...");

    await new Promise((resolve) => this.serverListener.close(resolve));

    console.log("HTTP server closed.");

    console.log("Closing database connections...");

    await prisma.$disconnect();

    console.log("Database connections closed.");

    process.exit(0);
  }

  public openListener() {
    const listenPort = process.env.APP_PORT || 3030;

    this.serverListener = this.express.listen(listenPort, () => {
      console.log(`Server is running on port ${listenPort}!`);
    });
  }
}

export default new AppController();
