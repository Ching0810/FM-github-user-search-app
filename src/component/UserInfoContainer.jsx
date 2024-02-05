import { Box, Stack } from "@mui/material"
import UserAvatar from "./UserAvatar"
import UserAccount from "./UserAccount"
import UserBio from "./UserBio"
import UserFollowRepos from "./UserFollowRepos"
import UserLink from "./UserLink"
import { useReference } from "../context/userInfoContext"

export default function UserInfoContainer () {
  const {
    isDesktop,
    theme
  } = useReference()

  return (
    // container for entire UserInfo section
    <Box 
      width='100%' 
      height='auto' 
      mt='24px'
      borderRadius='15px'
      boxShadow='-5px 8px 15px rgba(50, 50, 93, 0.15)'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      boxSizing='border-box'
      sx={{
        bgcolor: theme.palette.mode === 'light'? 'common.white' : 'common.lightBlack',
        padding: isDesktop?'48px':'40px'
      }}
    >
      {isDesktop?(
          <Stack direction='row' width='100%' spacing={4.5}>
            <UserAvatar/>
            <Stack spacing={4} width='100%'>
              <Stack spacing={2.5}>
                <UserAccount/>
                <UserBio/>
              </Stack>
              <UserFollowRepos/>
              <UserLink/>
            </Stack>
          </Stack>
        ):(
          <Stack direction='column' width='100%' spacing={3}>
            <Stack direction='row' spacing={5} alignItems='center'>
              <UserAvatar/>
              <UserAccount/>
            </Stack>
            <Stack direction='column' spacing={4}>
              <UserBio/>
              <UserFollowRepos/>
              <UserLink/>
            </Stack>
          </Stack>
        )}
    </Box>
  )
}