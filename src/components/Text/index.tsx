import React from "react";
import { ITextProps, Text as NBText } from "native-base";

export const Text: React.FC<ITextProps> = (props) => {
  return (
    <NBText
      textBreakStrategy="simple"
      numberOfLines={0}
      fontSize={"xs"}
      color={"text-default"}
      {...props}
    >
      {props.children}
    </NBText>
  );
};

export const ErrorText: React.FC<ITextProps> = (props) => {
  const { children, ...otherProps } = props;
  return (
    <Text fontSize={"xs"} pt={2} color={"text-critical"} {...otherProps}>
      {children}
    </Text>
  );
};
