import {
  ColorMode,
  extendTheme,
  type ThemeConfig,
  StyleFunctionProps,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

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
        bg: props.colorMode === "dark" ? "gray.950" : "gray.100",
      },
      ul: {
        listStyle: "none",
      },
      p: { color: "gray.400", fontSize: "md", lineHeight: "tall" },
    }),
  },
  fonts: {
    heading: `'Pretendard Variable', sans-serif`,
    body: `'Pretendard Variable', sans-serif`,
  },
  colors: {
    gray: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
      950: "#111111",
    },
  },
  layerStyles: {
    main: {
      color: "gray.300",
      m: "0 auto",
      minH: "100vh",
      p: 20,
      width: "1280px",
    },
    iconList: {
      li: {
        alginItems: "flex-start",
        display: "flex",
        lineHeight: "short",
        listStyle: "none",
        w: "100%",
        i: {
          flexShrink: 0,
          fontSize: "sm",
          fontStyle: "initial",
          pr: 1,
          "& + *:not(a)": {
            flex: 1,
          },
        },
        strong: {
          fontSize: "md",
          color: "gray.400",
          fontWeight: 600,
        },
        a: {
          fontSize: "sm",
        },
        p: {
          color: "gray.400",
          fontSize: "sm",
          lineHeight: "short",
        },
      },
    },
  },
  textStyles: {},
  components: {
    Badge: {
      baseStyle: {
        px: 1.5,
        h: 5,
        lineHeight: 5,
        borderRadius: "sm",
        fontSize: "xs",
        fontWeight: "600",
        textTransform: "none",
      },
    },
    Button: {
      baseStyle: {},
      sizes: {},
      variants: {
        link: {
          color: "blue.400",
          textDecoration: "underline",
          fontWeight: 400,
        },
      },
      defaultProps: {
        size: "",
        variant: "",
        colorScheme: "",
      },
    },
    Modal: {
      baseStyle: (props: StyleFunctionProps) => ({
        dialogContainer: {
          outline: "none !important",
        },
        dialog: {
          bgColor: mode("white", "gray.800")(props),
        },
      }),
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
