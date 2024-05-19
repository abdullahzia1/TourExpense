import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
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
      <GridItem area="main" bg="coral">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
