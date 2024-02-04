import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import searchIcon from '../assets/icon-search.svg'
import { getUserInfo } from '../API/api';
import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { useUserInfo } from "../context/userInfoContext"

export default function SearchInput() {
  // state variable for type-in name
  const [searchName, setSearchName] = useState('')

  // get all set function from context
  const {
    setUsername, 
    setAvatar, 
    setAccount, 
    setBio,
    setJoinTime,
    setFollower,
    setFollowing,
    setLocation,
    setBlog,
    setRepos,
    setCompany,
    setTwitter
  } = useUserInfo()

  const theme = useTheme()

  function handleClick() {
    getUserInfo(searchName)
    .then(result => {
      const createDate = result.created_at.slice(8,10)
      const createMonth = result.created_at.slice(5,7)
      const createYear = result.created_at.slice(0,4)
      setUsername(result.login)
      setAvatar(result.avatar_url)
      setAccount(result.name === null?'null':result.name)
      setBio(result.bio === null?'null':result.bio)
      setJoinTime(`${createDate} ${createMonth} ${createYear}`)
      setFollower(result.followers)
      setFollowing(result.following)
      setLocation(result.location === null?'null':result.location)
      setBlog(result.blog === ""?'null':result.blog)
      setRepos(result.public_repos)
      setCompany(result.company === null?'null':result.company)
      setTwitter(result.twitter_username === null?'null':result.twitter_username)
      setSearchName('')
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
            color: theme.palette.mode === 'light'? theme.palette.text.logo:theme.palette.common.white
          },
          startAdornment: (
            <img src={searchIcon} style={{margin: '0 20px'}}/>
          ),
          endAdornment: (
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