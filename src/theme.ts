import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  global: {},
  fonts: {
    heading: `'Pretendard Variable', sans-serif`,
    body: `'Pretendard Variable', sans-serif`,
  },
  colors: {},
  layerStyles: {
    main: {
      color: "gray.300",
      minH: "100vh",
      pb: 20,
      width: "1280px",
      m: "0 auto",
      section: {
        alignItems: "stretch",
        h2: {
          fontSize: "4xl",
          small: {
            fontSize: "lg",
            fontWeight: 600,
            pl: 3,
            color: "gray.600",
          },
        },
        h3: {
          fontSize: "2xl",
          lineHeight: "tall",
          small: {
            fontSize: "lg",
            fontWeight: 600,
            pl: 3,
            color: "gray.600",
          },
        },
        p: { color: "gray.400", fontSize: "lg", lineHeight: "tall" },
      },
    },
    prjBox: {
      bgColor: "gray.900",
      borderRadius: "2xl",
      px: 8,
      py: 5,
    },
    monitor: {
      flex: "640px 0 0",
      width: "640px",
      height: "360px",
      overflow: "auto",
      borderWidth: "1rem",
      borderRadius: "xl",
      borderColor: "gray.700",
      "::-webkit-scrollbar": {
        width: "8px",
      },
      "::-webkit-scrollbar-thumb": {
        bg: "gray.600",
      },
      "::-webkit-scrollbar-track": {
        bg: "gray.800",
      },
    },
    stackBox: {
      display: "flex",
      gap: 2,
      // padding: 3,
      // bgColor: "gray.800",
      // borderRadius: "xl",
      width: "100%",
    },
    stackBgBox: {
      display: "flex",
      gap: 2,
      p: 3,
      bgColor: "gray.800",
      borderRadius: "xl",
      width: "100%",
    },
    iconList: {
      li: {
        listStyle: "none",
        lineHeight: "tall",
        display: "flex",
        alginItems: "flex-start",
        w: "100%",
        mt: 2,
        i: {
          pr: 2,
          fontStyle: "initial",
          flexShrink: 0,
          "& + *": {
            flex: 1,
          },
        },
        strong: {
          fontSize: "lg",
          color: "gray.400",
          fontWeight: 600,
        },
        p: {
          color: "gray.500",
        },
      },
    },
  },
  textStyles: {},
  components: {
    Badge: {
      baseStyle: {
        px: 2,
        py: 0.5,
        borderRadius: "md",
        fontSize: "sm",
        textTransform: "none",
        lineHeight: "short",
      },
    },
    Button: {
      baseStyle: {},
      sizes: {},
      variants: {
        link: {
          color: "blue.500",
          textDecoration: "underline",
          fontWeight: 500,
        },
      },
      defaultProps: {
        size: "",
        variant: "",
        colorScheme: "",
      },
    },
  },
});

// breakpoints: {
//   //   base: "0em", // 0px
//   //   sm: "30em", // ~480px
//   //   md: "48em", // ~768px
//   //   lg: "62em", // ~992px
//   //   xl: "80em", // ~1280px
//   //   "2xl": "96em", // ~1536px
// },
export default theme;
