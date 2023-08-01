import Fastify from "fastify";
import openapi from "@fastify/swagger";
import { registerRoutes } from "./routes";

export const setupApp = async () => {
  const app = Fastify();

  const opticUrl = {
    "x-optic-url":
      "https://app.useoptic.com/organizations/68c60dd6-70a3-475b-97cd-8afe39b4df14/apis/Ru2Me4G-2nIro-cj4Bbib",
  };

  await app.register(openapi, {
    openapi: {
      openapi: "3.1.3",
      info: {
        title: "Bookstore API",
        version: "1.0.0",
        description: "The API for books",
      },
      servers: [
        { url: "https://api.bookstore.com", description: "Production server" },
      ],
      ...opticUrl,
    },
  });

  registerRoutes(app);

  await app.ready();

  return app;
};
