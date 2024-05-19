import { Box, Heading, Text } from "@chakra-ui/react";

const IncomeExpense = () => {
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
        <Text color="black" fontSize="lg" letterSpacing="1px" mb={2}>
          +$0.00
        </Text>
      </Box>
      <Box color="black">
        <Heading as="h4" size="md">
          Expense
        </Heading>
        <Text fontSize="lg" letterSpacing="1px" mb={2}>
          -$0.00
        </Text>
      </Box>
    </Box>
  );
};

export default IncomeExpense;
