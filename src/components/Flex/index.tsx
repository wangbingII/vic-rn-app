import { Flex as NBFlex, IFlexProps } from "native-base";
import React from "react";
import { IBoxProps } from "native-base/lib/typescript/components/primitives";

import { ThemeColors } from "../Theme";

interface FlexProps extends IBoxProps {
  color?: ThemeColors;
  bg?: ThemeColors | IBoxProps["bg"];
}
export const Flex: React.FC<FlexProps> = (props) => {
  return (
    <NBFlex direction="row" {...props}>
      {props.children}
    </NBFlex>
  );
};
