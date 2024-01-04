import { ColorMode, extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

interface ThemeProps {
  colorMode: ColorMode;
}

const theme = extendTheme({
  config,
  styles: {
    global: (props: ThemeProps) => ({
      html: {
        fontSize: "16px",
      },
      body: {
        bg: props.colorMode === "dark" ? "gray.800" : "white",
      },
      ul: {
        listStyle: "none",
      },
      p: { color: "gray.400", fontSize: "lg", lineHeight: "tall" },
    }),
  },
  fonts: {
    heading: `'Pretendard Variable', sans-serif`,
    body: `'Pretendard Variable', sans-serif`,
  },
  colors: {},
  layerStyles: {
    main: {
      color: "gray.300",
      m: "0 auto",
      minH: "100vh",
      p: 20,
      width: "1280px",
    },
    footer: {
      bgColor: "gray.700",
      bottom: 0,
      color: "gray.500",
      left: 0,
      position: "fixed",
      px: 4,
      py: 0.5,
      textAlign: "right",
      width: "100%",
      p: {
        fontSize: "sm",
        width: "1120px",
        m: "0 auto",
      },
    },
    iconList: {
      li: {
        listStyle: "none",
        lineHeight: "tall",
        display: "flex",
        alginItems: "flex-start",
        w: "100%",
        i: {
          pr: 2,
          fontStyle: "initial",
          flexShrink: 0,
          "& + *:not(a)": {
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
          fontSize: "md",
        },
      },
    },
  },
  textStyles: {},
  components: {
    Badge: {
      baseStyle: {
        px: 1.5,
        py: 0.5,
        borderRadius: "md",
        fontSize: "sm",
        fontWeight: "600",
        textTransform: "none",
        lineHeight: "short",
      },
    },
    Button: {
      baseStyle: {},
      sizes: {},
      variants: {
        link: {
          color: "yellow.600",
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
