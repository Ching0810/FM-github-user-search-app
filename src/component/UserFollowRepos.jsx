import { Grid, Typography } from "@mui/material"
import { useUserInfo } from "../context/userInfoContext"

export default function UserFollowRepos() {
  const {repos, follower, following, theme} = useUserInfo()

  const renderItem = (label, count) => {
    return(
      <Grid item xs={4}>
        <Typography 
          variant="h4" 
          sx={{
            color: theme.palette.mode === 'light'? 'text.placeHolder' : 'common.white',
          }}
        >
          {label}
        </Typography>
        <Typography 
          variant="h1"
          sx={{
            color: theme.palette.mode === 'light'? 'text.placeHolder' : 'common.white',
          }}
        >
          {count}
        </Typography>
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
      padding='16px 24px'
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