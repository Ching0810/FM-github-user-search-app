import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from './component/Container';
import { CssBaseline } from '@mui/material';

function App() {
  const [ mode, setMode ] = useState('light');
  //use state variable: mode to control light or dark mode

  const theme = createTheme({
    palette: {
      mode: mode,
      // common setting is for background color
      common: {
        button: '#0079FF',
        black: '#141D2F',
        white: '#F6F8FF',
      },
      // text setting is for text color
      text: {
        light: '#222731',
        dark: '#ffffff',
      },
    },
    typography: {
      fontFamily: 'Space Mono',
      fontSize:15,
      fontWeight: 400,
      lineHeight: 25/15,
      h1: {
        fontSize: 26,
        fontWeight: 700,
        lineHeight: 38/26
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
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
          bgcolor: theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.common.black
        }}
      >
        <Container mode={mode} setMode={setMode}/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
