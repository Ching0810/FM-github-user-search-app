import Header from './Header';
import SearchInput from './SearchInput';
import UserInfoContainer from './UserInfoContainer';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import { UserInfoProvider } from '../context/userInfoContext';

// container for contain three main items of entire app: header, search input, result section
export default function Container({setMode}) {
  const theme = useTheme()

  return (
    // this outer Box set entire background
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
        // use minHeight to let component display entirely when it greater than 100vh
        minHeight: '100vh',
        bgcolor: theme.palette.mode === 'light' ? theme.palette.common.lightWhite : theme.palette.common.black
      }}
    >
      {/* this inside Box set application width */}
      <Box 
        width={{
          xs: '573px',
          md: '730px'
        }}
        display= 'flex'
        flexDirection= 'column'
        justifyContent= 'center'
        alignItems= 'center'
        boxSizing='border-box'
        padding='30px 0'
      >
        <UserInfoProvider>
          <Header setMode={setMode} />
          <SearchInput />
          <UserInfoContainer />
        </UserInfoProvider>
      </Box>
    </Box>
  )
}