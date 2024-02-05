import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Container from './component/Container';
import theme from './theme';
import { UserInfoProvider } from './context/userInfoContext';

function App() {
  //use state variable: mode to control light or dark mode
  const [ mode, setMode ] = useState('light');

  const themeWithMode = {
    ...theme,
    palette: {
      ...theme.palette,
      mode: mode
    }
  }

  return (
    <ThemeProvider theme={themeWithMode}>
      <UserInfoProvider>
        <Container setMode={setMode}/>
      </UserInfoProvider>
    </ThemeProvider>
  );
}

export default App;
