import {createTheme} from "@mui/material";

const theme = createTheme(({
  typography: {
    allVariants: {
      color: '#172B4D',
      fontFamily: 'Manrope'
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          ':hover': {
            transform: 'scale(1)',
            boxShadow: 'none',
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        }
      }
    }
  },
}));

export default theme;
