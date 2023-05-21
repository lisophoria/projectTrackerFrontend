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
          ':hover': {
            transform: 'scale(1)',
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
