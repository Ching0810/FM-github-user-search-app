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
} from "../UserInfoContext"

export default function SearchInput() {
  // state variable for type-in name
  const [searchName, setSearchName] = useState('')

  const {dispatch} = useUserInfoReducer()

  const {isFetchSuccess} = useUserInfo()

  const {theme, isTablet} = useReference()

  // send both API result & event type as payload into dispatch function
  // both button onClick and Enter key down event would trigger this function
  function handleClick(e) {
    e.preventDefault()
    getUserInfo(searchName)
    .then(result => {
      if (result.status === 200) {
        dispatch({type: actions.GET_USER_INFO_SUCCESS, payload: result.data})
        setSearchName('')
      } else if (result.status === 404) {
        dispatch({type: actions.GET_USER_INFO_FAIL, payload: {}})
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
        height: isTablet?'69px': '60px',
        '& > :not(style)': { m: 0, width: '100%' },
        bgcolor: theme.palette.mode === 'light'? 'common.white' : 'common.lightBlack',
      }}
      noValidate
      autoComplete="off"
      mt='36px'
      borderRadius='15px'
      boxShadow='-5px 8px 15px rgba(50, 50, 93, 0.15)'
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleClick(e);
        }
      }}
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
            fontSize: isTablet? theme.typography.h3.fontSize:theme.typography.h4.fontSize 
          },
          startAdornment: (
            <img 
              src={searchIcon} 
              style={{margin: isTablet?'0 20px': '0 10px'}}
            />
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
                disabled={searchName.length === 0? true: false}
                sx={{
                  backgroundColor: 'common.button',
                  width: isTablet?'106px':'80px',
                  height: isTablet?'50px':'46px',
                  fontSize: isTablet?'h3.fontSize':'h4.fontSize',
                  textTransform: 'none',
                  color: 'text.light', 
                }}
                onClick={e=>handleClick(e)}
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
            paddingLeft: isTablet?'15px':'0px',
            paddingRight: isTablet?'10px':'7px'
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