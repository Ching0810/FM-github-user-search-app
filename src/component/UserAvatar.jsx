import { useUserInfo } from "../context/userInfoContext"
import Image from "mui-image"
import { Box } from "@mui/material"

export default function UserAvatar() {
  const {avatar} = useUserInfo()

  return (
    <Box width='117px' height='117px'>
      <Image src={avatar} width={117} height={117} duration={0} style={{ borderRadius:'50%'}}/>
    </Box>
  )
}