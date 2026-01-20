import React, { useMemo } from "react";
import { styled } from "@mui/material";
import { ILoremIpsumParams, loremIpsum } from "lorem-ipsum";
import SSRCurtain from "./SSRCurtain";
import "./LoremIpsum.scss";

export interface LoremIpsumProps extends ILoremIpsumParams {
  ref?: React.Ref<HTMLSpanElement>;
}

export default function LoremIpsum({ ref, ...props }: LoremIpsumProps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const text = useMemo(() => loremIpsum(props), [...Object.values(props)]);
  
  return (
    <SSRCurtain>
      <StyledLoremIpsum ref={ref}>{text}</StyledLoremIpsum>
    </SSRCurtain>
  );
}

const StyledLoremIpsum = styled("span")`
    white-space: pre-line;
`;

