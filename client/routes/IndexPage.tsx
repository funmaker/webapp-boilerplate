import React, { useEffect, useReducer } from 'react';
import { Paper, styled } from '@mui/material';
import { IndexPageResponse } from "../../types/api";
import usePageData from "../hooks/usePageData";

const busyBraile = ['⠙', '⠸', '⢰', '⣠', '⣄', '⡆', '⠇', '⠋'];

export default function IndexPage() {
  const { pageData } = usePageData<IndexPageResponse>();
  const [counter, incCounter] = useReducer(acc => acc + 1, 0);
  
  useEffect(() => {
    const id = setInterval(incCounter, 100);
    return () => clearInterval(id);
  }, []);
  
  return (
    <StyledPaper>
      {busyBraile[counter % busyBraile.length]}
      &ensp;
      {pageData?.kek}
      &ensp;
      {busyBraile[counter % busyBraile.length]}
    </StyledPaper>
  );
}

const StyledPaper = styled(Paper)`
    padding: 2em;
`;
