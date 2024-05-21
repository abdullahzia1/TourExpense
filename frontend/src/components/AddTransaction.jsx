import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <Box>
      <Heading as="h3" size="md">
        Add new transaction
      </Heading>
      <form>
        <FormControl mb={3}>
          <FormLabel htmlFor="text">Text</FormLabel>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel htmlFor="amount">
            Amount (negative - expense, positive - income)
          </FormLabel>
          <Input
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            placeholder="Enter amount..."
          />
        </FormControl>
        <Button type="submit">Add transaction</Button>
      </form>
    </Box>
  );
};

export default AddTransaction;
