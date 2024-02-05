import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    // common setting is for background color
    common: {
      button: '#0079FF',
      black: '#141D2F',
      white: '#ffffff',
      lightWhite: '#F6F8FF',
      lightBlack: '#1E2A47'
    },
    // text setting is for text color
    text: {
      dark: '#697C9A',
      heavyDark: '#2B3442',
      light: '#ffffff',
      logo: '#222731',
      placeHolder: '#4B6A9B',
      alert: '#F74646'
    },
  },
  // custom breakpoint value
  breakpoints: {
    values: {
      xs: 0,
      md: 950,
    }
  },
  // // custom setting of spacing value
  // spacing: (value) => `${value * 4}px`,
  typography: {
    fontFamily: 'Space Mono',
    fontSize:15,
    fontWeight: 400,
    lineHeight: 25/15,
    h1: {
      fontSize: 26,
      fontWeight: 700,
      lineHeight: 38/26,
    },
    h2: {
      fontSize: 22,
      fontWeight: 700,
      lineHeight: 33/22
    },
    h3: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 24/16
    },
    h4: {
      fontSize: 13,
      fontWeight: 400,
      lineHeight: 20/13
    },
  },
  components: {
    // customize Button component setting
    MuiButton: {
      styleOverrides: {
        // // outlined setting would only apply to outlined type of Button component
        // outlined: {
        //   borderRadius:20
        // },
        
        // root could customize all Button setting
        root: {
          borderRadius: 10
        }
      }
    },
    MuiStack: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box'
        }
      }
    },
  }
})

export default theme