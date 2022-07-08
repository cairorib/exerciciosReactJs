import React from "react";
import ReactDOM from "react-dom/client";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer website",
          category: "develop",
          amount: 9000,
          createdAt: new Date("2022-12-05 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          category: "casa",
          amount: 100,
          createdAt: new Date("2022-11-12 09:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
      /*    return [
        {
          id: 1,
          title: "transaction 1",
          amount: 400,
          type: "deposit",
          category: "food",
          createAt: new Date(),
        },
      ]; */
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return data;
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
