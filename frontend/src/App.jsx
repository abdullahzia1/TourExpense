import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Grid
        templateAreas={{
          base: ` "nav" "main" `,
          lg: ` "nav" "main" `,
        }}
      >
        {/* <Show above="lg">
      <GridItem area="nav" bg="dodgerblue">
        NavBar
      </GridItem>
      </Show> */}

        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="main">
          <Box mx="auto" my={6} width="400px">
            <Balance />
            <IncomeExpense />
            <TransactionList />
            <AddTransaction />
          </Box>
        </GridItem>
      </Grid>
    </GlobalProvider>
  );
};

export default App;
