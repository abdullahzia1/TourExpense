import { Heading } from "@chakra-ui/react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const balance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <Heading as="h4" size="md">
        Your Balance
      </Heading>
      <Heading as="h1">$ {balance}</Heading>
    </>
  );
};

export default Balance;
