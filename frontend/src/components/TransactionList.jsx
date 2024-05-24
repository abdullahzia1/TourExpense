/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

import Transaction from "./Transaction";

import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <Heading as="h3" size="lg">
        History
      </Heading>
      <UnorderedList style={{ listStyle: "none", padding: "10px" }}>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </UnorderedList>
    </>
  );
};

export default TransactionList;
