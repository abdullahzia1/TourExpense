import { Box, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <Box
      bg="white"
      boxShadow="var(--box-shadow)"
      p={4}
      display="flex"
      justifyContent="space-between"
      my={4}
    >
      <Box color="black">
        <Heading as="h4" size="md">
          Income
        </Heading>
        <Text color="Green" fontSize="lg" letterSpacing="1px" mb={2}>
          ${income}
        </Text>
      </Box>
      <Box color="black">
        <Heading as="h4" size="md">
          Expense
        </Heading>
        <Text color="red" fontSize="lg" letterSpacing="1px" mb={2}>
          ${expense}
        </Text>
      </Box>
    </Box>
  );
};

export default IncomeExpense;
