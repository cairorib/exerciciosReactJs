import { useContext } from "react";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import TotalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../../src/TransactionsContext";

import { Container } from "./style";
export function Summary() {
  const transactions = useContext(TransactionsContext);
  console.log(transactions);
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
        <strong>R$1000</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="Entradas" />
        </header>
        <strong> - R$500</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Entradas" />
        </header>
        <strong>R$500</strong>
      </div>
    </Container>
  );
}
