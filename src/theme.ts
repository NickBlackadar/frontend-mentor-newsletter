import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
  fonts: {
    body: `'Roboto', sans-serif`,
    heading: `'Roboto', sans-serif`,
  },
});

export default theme;
