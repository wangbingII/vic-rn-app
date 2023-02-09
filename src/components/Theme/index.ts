import { extendTheme } from "native-base";
import { styleConst } from "./style";
import { LinearGradient } from "expo-linear-gradient";

const colors = {
  ...styleConst,
  primary: {
    "50": "#d2ddff",
    "100": "#aac0ff",
    "200": "#83a2ff",
    "300": "#5b84ff",
    "400": "#3366ff",
    "500": "#2258f8",
    "600": "#134af0",
    "700": "#1545d6",
    "800": "#1942ba",
    "900": "#1c3da0",
  },
};

export const theme = extendTheme({
  colors,
  breakpoints: {
    base: 0,
    sm: 768,
    md: 1024,
    lg: 1280,
  },
  shadows: { sm: renderShadows("sm"), md: renderShadows("md") },
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
    dependencies: {
      "linear-gradient": LinearGradient,
    },
  },
});

export type ThemeColors = keyof typeof theme.colors;
export type ThemeBackground = keyof typeof theme.colors;

function renderShadows(type: "sm" | "md") {
  const isSM = type === "sm";
  return {
    shadowColor: styleConst["shadow"],
    shadowOffset: {
      width: 0,
      height: isSM ? 6 : 10,
    },
    shadowOpacity: 1,
    shadowRadius: isSM ? 12 : 5,
    elevation: 1,
  };
}
