import Header from './Header';
import SearchInput from './SearchInput';
import { Box } from '@mui/material';

// container for contain three main items of entire app: header, search input, result section
export default function Container({ mode, setMode}) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Header mode={mode} setMode={setMode}/>
      <SearchInput/>
    </Box>
  )
}