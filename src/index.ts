/**
 * Import modules
 */

import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { ProductResolver } from "./resolvers/ProductResolver";
import { createConnection } from "typeorm";
import path from "path";

/**
 * Start Server method
 */

async function startServer(): Promise<void> {
  /** Typeorm connection */
  await createConnection();

  /** Building schema */
  const schema = await buildSchema({
    resolvers: [ProductResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  /** Creating express instance */
  const app = express();

  /** Creating express instance */
  const server = new ApolloServer({
    schema,
  });

  /** Apply express middleware */
  server.applyMiddleware({ app, path: "/graphql" });

  /** Start server */
  app.listen(4000, () => {
    /** Console confirmation */
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
  });
}

/**
 * Starting server
 */

startServer().catch((e: Error) => {
  console.error(`😑 Server failed: ${e}`);
});
