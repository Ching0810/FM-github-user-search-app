import { Typography } from "@mui/material"
import { useUserInfo, useReference } from "../UserInfoContext"

export default function UserBio() {
  const {bio} = useUserInfo()
  const {theme, isTablet} = useReference()

  return (
    <Typography
      variant={isTablet?"h3":'h4'}
      sx={{
        color: theme.palette.mode === 'light'? 'text.placeHolder': 'common.white',
      }}
    >
      {bio}
    </Typography>
  )
}