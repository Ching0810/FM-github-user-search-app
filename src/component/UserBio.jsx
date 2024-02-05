import { Typography } from "@mui/material"
import { useUserInfo, useReference } from "../context/userInfoContext"

export default function UserBio() {
  const {bio} = useUserInfo()
  const {theme} = useReference()

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