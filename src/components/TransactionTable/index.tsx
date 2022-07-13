import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Container } from "./style";
import { api } from "../../services/api";
import { useTransactions } from "../../hooks/useTransactions";

/* interface Transaction {
  transactions: tt[];
}

interface tt {
  id?: number;
  title?: string;
  amount?: number;
  type?: string;
  category?: string;
  createdAt?: string;
} */

export function TransactionTable() {
  const { transactions } = useTransactions();
  /* console.log("transactions>>>>>", transactions); */

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr>
              {/*   <td>{transaction.id}</td> */}
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
