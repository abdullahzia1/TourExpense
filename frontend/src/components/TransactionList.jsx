/* eslint-disable no-unused-vars */
import { Button, Heading, ListItem, UnorderedList } from "@chakra-ui/react";

import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <Heading as="h3" size="lg">
        History
      </Heading>
      <UnorderedList>
        {transactions.map((transaction) => (
          <ListItem key={transaction.id}>
            {transaction.text} - <span>{transaction.amount}</span>
            <Button
              bg="red.500"
              variant="ghost"
              color="black"
              fontSize="lg"
              size="md"
            >
              x
            </Button>{" "}
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
};

export default TransactionList;
