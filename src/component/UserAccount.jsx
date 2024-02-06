import { useUserInfo, useReference } from "../context/userInfoContext"
import { Typography, Stack, Box } from "@mui/material"

export default function UserAccount() {
  const {
    username, 
    account, 
    joinTime
  } = useUserInfo()
  const {
    isDesktop, 
    isTablet,
    theme
  } = useReference()

  return (
    <>
      {isDesktop?(
        <Stack width='100%' display='flex' flexDirection='row'>
          <Stack direction='column' spacing='2px'>
            <Typography 
              variant="h1"
              sx={{
                color: theme.palette.mode === 'light'? 'common.black': 'common.white',
              }}
            >
              {username}
            </Typography>
            <Typography
              variant="h3"
              color='common.button'
            >
              @{account}
            </Typography>
          </Stack>
          <Box flexGrow={1}/>
          <Typography 
            variant="h3" 
            lineHeight={theme.typography.h1.lineHeight}
            sx={{
              color: theme.palette.mode === 'light'? 'text.dark': 'common.white',
            }}
          >
            Joined {joinTime}
          </Typography>
        </Stack>
      ):(
        <Stack direction='column' spacing='2px'>
          <Typography 
            variant={isTablet?'h1':'h3'}
            fontWeight={700}
            sx={{
              color: theme.palette.mode === 'light'? 'common.black': 'common.white',
            }}
          >
            {username}
          </Typography>
          <Typography
            variant={isTablet?'h3':'h4'}
            color='common.button'
          >
            @{account}
          </Typography>
          <Typography 
            variant={isTablet?'h3':'h4'}
            lineHeight={theme.typography.h1.lineHeight}
            sx={{
              color: theme.palette.mode === 'light'? 'text.dark': 'common.white',
            }}
          >
            Joined {joinTime}
          </Typography>
        </Stack>
      )}
    </>
  )
}