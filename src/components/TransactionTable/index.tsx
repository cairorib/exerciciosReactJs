import { useEffect, useState } from "react";
import { Container } from "./style";
import { api } from "../../services/api";

export function TransactionTable() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get("/transactions").then((response) => setTransactions(response.data));
    /* .then((response) => response.json()) */
    /* .then((data) => console.log(data)); */
  }, []);
  console.log(transactions);

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
          <tr>
            <td>teste</td>
            <td>teste</td>
            <td>teste</td>
            <td>teste</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
