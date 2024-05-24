/* eslint-disable react/prop-types */
import { Box, Button, ListItem, Text, Flex } from "@chakra-ui/react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  const color =
    transaction.amount < 0 ? "1px solid #FF0000" : "1px solid #00FF00";
  return (
    <Box
      key={transaction.id}
      display="flex"
      mb={4}
      border="1px solid black"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box padding={2} display="block" justifyContent="space-between">
        <ListItem display="flex" key={transaction.id}>
          <Text>{transaction.text}</Text>
          <Box
            display="flex"
            justifyContent="flex-end"
            paddingRight={0}
            paddingLeft="75px"
          >
            <Flex>
              <Text>:</Text>
              <Text
                display="flex"
                float="right"
                style={{ borderRight: color, paddingRight: "5px" }}
              >
                {sign}$ {Math.abs(transaction.amount)}
              </Text>
            </Flex>
          </Box>
        </ListItem>
      </Box>
      <Button
        bg="red.500"
        variant="ghost"
        color="black"
        fontSize="lg"
        size="sm"
        opacity={0}
        _hover={{ opacity: 1 }}
        transition="opacity 0.3s ease"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </Button>
    </Box>
  );
};

export default Transaction;
