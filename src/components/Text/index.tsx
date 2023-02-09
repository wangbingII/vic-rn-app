import React from "react";
import { ITextProps, Text as NBText } from "native-base";
import { ThemeColors } from "../Theme";

type TextProps = ITextProps & {
  color?: ThemeColors;
  bg?: ThemeColors;
};

export const Text: React.FC<TextProps> = (props) => {
  return (
    <NBText
      textBreakStrategy="simple"
      numberOfLines={0}
      fontSize={"xs"}
      color={"red"}
      {...props}
    >
      {props.children}
    </NBText>
  );
};
