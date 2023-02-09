import { useToken } from "native-base";
import { ThemeColors } from "./index";

export const useThemeValue = <T extends ThemeColors[] | ThemeColors>(
  colorSymbol: T,
  fallback?: T
): T extends Array<string> ? string[] : string =>
  useToken("colors", colorSymbol, fallback);
