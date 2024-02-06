import { Grid, Stack, Typography } from "@mui/material"
import { useUserInfo, useReference } from "../context/userInfoContext"

export default function UserFollowRepos() {
  const {
    repos, 
    follower, 
    following
  } = useUserInfo()
  const {theme, isTablet} = useReference()

  const renderItem = (label, count) => {
    return(
      <Grid item xs={4}>
        <Stack alignItems={isTablet?'flex-start':'center'}>
          <Typography 
            variant="h4" 
            sx={{
              color: theme.palette.mode === 'light'? 'text.placeHolder' : 'common.white',
            }}
          >
            {label}
          </Typography>
          <Typography 
            variant={isTablet?"h1":'h4'}
            fontWeight={700}
            sx={{
              color: theme.palette.mode === 'light'? 'text.heavyDark' : 'common.white',
            }}
          >
            {count}
          </Typography>
        </Stack>
      </Grid>
    )
  }

  return(
    <Grid 
      container 
      direction='row'
      bgcolor='common.lightWhite'
      width='100%'
      borderRadius='10px'
      padding={isTablet?'16px 24px':'16px 4px'}
      sx={{
        bgcolor: theme.palette.mode === 'light'? 'common.lightWhite' : 'common.black',
      }}
    >
      {renderItem("Repos", repos)}
      {renderItem("Followers", follower)}
      {renderItem("Following", following)}
    </Grid>
  )
}