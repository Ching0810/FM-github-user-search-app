import { Box, Stack, Typography } from "@mui/material"
import { useTheme } from "@emotion/react"
import { useUserInfo } from "../context/userInfoContext"
import UserAvatar from "./UserAvatar"
import UserAccount from "./UserAccount"

export default function UserInfoContainer () {
  const theme = useTheme()

  const {
    username, 
    account,
    bio,
    joinTime,
    follower,
    following,
    location,
    blog,
    repos,
    company,
    twitter,
    isDesktop
  } = useUserInfo()

  return (
    // container for entire UserInfo section
    <Box 
      width='100%' 
      height='419px' 
      mt='24px'
      borderRadius='15px'
      boxShadow='-5px 8px 15px rgba(50, 50, 93, 0.15)'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      padding="48px"
      boxSizing='border-box'
      sx={{
        bgcolor: theme.palette.mode === 'light'? 'common.white' : 'common.lightBlack'
      }}
    >
      {isDesktop?(
          <Stack direction='row' width='100%' spacing={4.5}>
            <UserAvatar/>
            <Stack direction='column' width='100%' spacing={2.5}>
              <UserAccount/>
              <Typography>
                {bio}
              </Typography>
            </Stack>
          </Stack>
        ):(
          <Stack direction='column' width='100%'>
            <Stack direction='row' spacing={5}>
              <UserAvatar/>
              <Stack direction='column'>
                <UserAccount/>
              </Stack>
            </Stack>
            <Typography>
              {bio}
            </Typography>
          </Stack>
        )}
    </Box>
  )
}