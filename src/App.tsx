import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Router from "routes/Router";

import "assets/fonts/pretendardvariable.css";
import theme from "theme";

function App() {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </>
  );
}

export default App;
