import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import searchIcon from '../assets/icon-search.svg'
import { getUserInfo } from '../API/api';
import { useState } from 'react';
import { useTheme } from '@emotion/react';

export default function SearchInput() {
  const [username, setUsername] = useState('')

  const theme = useTheme()

  function handleClick() {
    getUserInfo(username)
    .then(result => {
      console.log(result)
    })
  }

  return (
    <Box
      component="form"
      sx={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        width: '100%',
        height: '69px',
        '& > :not(style)': { m: 0, width: '100%' },
        bgcolor: theme.palette.mode === 'light'? 'common.white' : 'common.lightBlack'
      }}
      noValidate
      autoComplete="off"
      mt='36px'
      borderRadius='15px'
      boxShadow='-5px 8px 15px rgba(50, 50, 93, 0.15)'
    >
      <TextField
        id="search-input"
        placeholder='Search Github username...'
        variant="outlined"
        fullWidth
        value={username}
        onChange={e => setUsername(e.target.value)}
        InputProps={{
          startAdornment: (
            <img src={searchIcon} style={{margin: '0 20px'}}/>
          ),
          endAdornment: (
            <Button 
              // type="submit" 
              variant="contained" 
              sx={{
                backgroundColor: 'common.button',
                // borderRadius: '10px',
                width: '106px',
                height: '50px',
                fontSize: 'h3.fontSize',
                textTransform: 'none',
                color: 'text.light', 
              }}
              onClick={handleClick}
            >
              Search
            </Button>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderColor: 'transparent',
            boxShadow: 'none',
            paddingLeft: '15px',
            paddingRight: '10px'
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '& .MuiInputBase-input::placeholder': {
            color: theme.palette.mode === 'light'? 'text.placeHolder' : 'common.white',
          },
        }}
      />
    </Box>
  )
}