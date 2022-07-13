import { useContext } from "react";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import TotalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./style";
export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type == "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdrawn += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdrawn: 0,
      total: 0,
    }
  );

  /*  const totalDeposits = transactions.reduce((acc, transaction) => {
    if (transaction.type == "deposit") {
      return acc + transaction.amount;
    }
    return acc;
  }, 0); */

  /* console.log(transactions); */
  return (
    <Container>
      {/*  <TransactionsContext.Consumer>
        {(data) => {
          console.log(data);
          return <p>ok</p>;
        }}
      </TransactionsContext.Consumer> */}
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="Entradas" />
        </header>
        <strong>{summary.deposits}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="Entradas" />
        </header>
        <strong> - R${summary.withdrawn}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Entradas" />
        </header>
        <strong>R${summary.total}</strong>
      </div>
    </Container>
  );
}
