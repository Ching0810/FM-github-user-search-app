import { Grid, Typography, Stack } from "@mui/material"
import { useUserInfo } from "../context/userInfoContext"
import Image from "mui-image"
import locationIcon from '../assets/icon-location.svg'
import locationIconWhite from '../assets/icon-location-white.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import twitterIconWhite from '../assets/icon-twitter-white.svg'
import blogIcon from '../assets/icon-website.svg'
import blogIconWhite from '../assets/icon-website-white.svg'
import companyIcon from '../assets/icon-company.svg'
import companyIconWhite from '../assets/icon-company-white.svg'

export default function UserLink() {
  const {location, twitter, blog, company, theme} = useUserInfo()
  const renderLink = (icon, text) => {
    return(
      <Grid item xs={6}>
        <Stack direction='row' spacing={2} alignItems='center'>
          <Stack height={20} width={20}>
            <Image 
              src={icon} 
              duration={0} 
              height={20} 
              width={20} 
              fit="contain"
            />
          </Stack>
          <Stack flexWrap='wrap'>
            <Typography 
              variant="h4"
              sx={{
                color: theme.palette.mode === 'light'? 'text.placeHolder' : 'common.white',
              }}
            >
              {text}
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    )
  }

  return (
    <Grid container rowSpacing={2.5}>
      {renderLink(theme.palette.mode === 'light'? locationIcon: locationIconWhite, location)}
      {renderLink(theme.palette.mode === 'light'? twitterIcon: twitterIconWhite, twitter)}
      {renderLink(theme.palette.mode === 'light'? blogIcon: blogIconWhite, blog)}
      {renderLink(theme.palette.mode === 'light'? companyIcon: companyIconWhite, `@${company}`)}
    </Grid>
  )
}