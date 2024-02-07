import { useUserInfo, useReference } from "../UserInfoContext"
import Image from "mui-image"
import { Box } from "@mui/material"

export default function UserAvatar() {
  const {avatar} = useUserInfo()
  const {isTablet} = useReference()

  return (
    <Box width={isTablet?117:70}  height={isTablet?117:70} >
      <Image 
        src={avatar} 
        width={isTablet?117:70} 
        height={isTablet?117:70} 
        duration={0} 
        style={{ borderRadius:'50%'}}
      />
    </Box>
  )
}