import { Typography } from "@mui/material"
import { useUserInfo } from "../context/userInfoContext"

export default function UserBio() {
  const {theme, bio} = useUserInfo()

  return (
    <Typography
      variant="h3"
      sx={{
        color: theme.palette.mode === 'light'? 'text.placeHolder': 'common.white',
      }}
    >
      {bio}
    </Typography>
  )
}