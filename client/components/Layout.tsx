import React from "react";
import { keyframes, styled } from "@mui/material";
import { transientOptions } from "../helpers/utils";
import useMeasure from "../hooks/useMeasure";

const MOBILE_WIDTH = 800;
const MIN_WIDTH = 350;
const MIN_HEIGHT = 600;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { rect, ref } = useMeasure();
  const compact = rect ? rect.width < MOBILE_WIDTH : false;
  const scale = rect ? Math.min(rect.width / MIN_WIDTH, rect.height / MIN_HEIGHT, 1.0) * 100 : 100;
  
  return (
    <StyledLayout $compact={compact}
                  ref={ref}
                  style={{ fontSize: scale < 100 ? `${scale}%` : undefined }}>
      {children}
      <StyledBubbles>
        <StyledBubble />
        <StyledBubble />
        <StyledBubble />
        <StyledBubble />
        <StyledBubble />
        <StyledBubble />
        <StyledBubble />
        <StyledBubble />
        <StyledBubble />
        <StyledBubble />
      </StyledBubbles>
    </StyledLayout>
  );
}

const StyledLayout = styled("div", transientOptions)<{ $compact: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  z-index: 0;
  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
  
  ${props => props.$compact} {
    // TODO: mobile
  }
  
  > header {
    position: sticky;
    top: 0;
  }
  
  > header + div {
    flex: 1 0 auto;
  }
`;

const StyledBubbles = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`;

const bubbleAnim = keyframes`
  0%   { transform: translateY(0); }
  100% { transform: translateY(-130vh) rotate(600deg); }
`;

const StyledBubble = styled("div")`
  position: absolute;
  display: block;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.75);
  opacity: 0.15;
  bottom: -160px;
  animation: ${bubbleAnim} 25s infinite;
  transition-timing-function: linear;
  
  &:nth-of-type(1) {
    left: 10%;
  }
  
  &:nth-of-type(2) {
    left: 20%;
    width: 80px;
    height: 80px;
    animation-delay: 2s;
    animation-duration: 17s;
  }
  
  &:nth-of-type(3) {
    left: 25%;
    animation-delay: 4s;
  }
  
  &:nth-of-type(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-duration: 22s;
    opacity: 0.25;
  }
  
  &:nth-of-type(5) {
    left: 70%;
  }
  
  &:nth-of-type(6) {
    left: 80%;
    width: 120px;
    height: 120px;
    animation-delay: 3s;
    opacity: 0.2;
  }
  
  &:nth-of-type(7) {
    left: 32%;
    width: 160px;
    height: 160px;
    animation-delay: 7s;
  }
  
  &:nth-of-type(8) {
    left: 55%;
    width: 20px;
    height: 20px;
    animation-delay: 15s;
    animation-duration: 40s;
  }
  
  &:nth-of-type(9) {
    left: 25%;
    width: 10px;
    height: 10px;
    animation-delay: 2s;
    animation-duration: 40s;
    opacity: 0.30;
  }
  
  &:nth-of-type(10) {
    left: 90%;
    width: 160px;
    height: 160px;
    animation-delay: 11s;
  }
`;

