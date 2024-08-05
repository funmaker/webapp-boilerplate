import React from "react";
import { Button, Paper, styled, Typography } from "@mui/material";
import Link from "../components/Link";

export default function NotFoundPage() {
  return (
    <StyledPaper>
      <Typography variant="h4" paragraph>Page Not Found</Typography>
      <Button variant="contained" component={Link} to="/" noMui>Return to Home Page</Button>
    </StyledPaper>
  );
}

const StyledPaper = styled(Paper)`
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;
