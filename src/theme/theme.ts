// src/theme.ts
import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#3498DB',
      light: '#5dade2',
      dark: '#21618C',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#95A5A6',
      light: '#bdc3c7',
      dark: '#7f8c8d',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212529',
      secondary: '#495057',
    },
    success: {
      main: '#2ECC71',
      light: '#D4EFDF',
      dark: '#239B56',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#F39C12',
      light: '#FCF3CF',
      dark: '#B9770E',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#E74C3C',
      light: '#FADBD8',
      dark: '#C0392B',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h6: {
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#3498DB',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorSuccess: {
          backgroundColor: '#D4EFDF',
          color: '#239B56',
          fontWeight: 600,
        },
        colorWarning: {
          backgroundColor: '#FCF3CF',
          color: '#B9770E',
          fontWeight: 600,
        },
        colorError: {
          backgroundColor: '#FADBD8',
          color: '#C0392B',
          fontWeight: 600,
        },
      },
    },
  },
});

export default customTheme;