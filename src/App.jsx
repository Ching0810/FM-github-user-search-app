import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Container from './component/Container';
import theme from './theme';

function App() {
  const [ mode, setMode ] = useState('light');
  //use state variable: mode to control light or dark mode

  const themeWithMode = {
    ...theme,
    palette: {
      ...theme.palette,
      mode: mode
    }
  }

  return (
    <ThemeProvider theme={themeWithMode}>
      <Container setMode={setMode}/>
    </ThemeProvider>
  );
}

export default App;
