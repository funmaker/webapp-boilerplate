/* eslint-disable @typescript-eslint/naming-convention */
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

export default theme;

declare module '@mui/material/styles' {
  interface Theme {}
  
  interface ThemeOptions {}
}

