import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack, Typography } from '@mui/material';
import searchIcon from '../assets/icon-search.svg'
import { getUserInfo } from '../API/api';
import { useState } from 'react';
import { 
  useUserInfoReducer, 
  actions, 
  useReference, 
  useUserInfo 
} from "../context/userInfoContext"

export default function SearchInput() {
  // state variable for type-in name
  const [searchName, setSearchName] = useState('')

  const {dispatch} = useUserInfoReducer()

  const {isFetchSuccess} = useUserInfo()

  const {theme, defaultUserInfo} = useReference()

  // send both API result & event type as payload into dispatch function
  function handleClick() {
    getUserInfo(searchName)
    .then(result => {
      if (result.status === 200) {
        dispatch({type: actions.GET_USER_INFO_SUCCESS, payload: result.data})
        setSearchName('')
      } else if (result.status === 404) {
        dispatch({type: actions.GET_USER_INFO_FAIL, payload: defaultUserInfo})
        console.log('Resource not found')
      }
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
        value={searchName}
        onChange={e => setSearchName(e.target.value)}
        InputProps={{
          style: {
            color: theme.palette.mode === 'light'? theme.palette.text.logo:theme.palette.common.white,
            fontSize: theme.typography.h3.fontSize
          },
          startAdornment: (
            <img src={searchIcon} style={{margin: '0 20px'}}/>
          ),
          endAdornment: (
            <Stack spacing={2} direction='row' alignItems='center'>
              {/* conditional render no results alert then fetch user info fail */}
              {isFetchSuccess
                ?<></>
                :<Typography 
                  noWrap
                  variant='h3'
                  color='text.alert'
                  fontWeight={700}
                >
                  No results
                </Typography>
              }
              <Button 
                // type="submit" 
                variant="contained" 
                sx={{
                  backgroundColor: 'common.button',
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
            </Stack>
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