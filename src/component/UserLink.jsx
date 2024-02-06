import { Grid, Typography, Stack } from "@mui/material"
import { useUserInfo, useReference } from "../context/userInfoContext"
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
  const {
    location, 
    twitter, 
    blog, 
    company
  } = useUserInfo()
  const {theme, isTablet} = useReference()

  const icons = {
    location: theme.palette.mode === 'light' ? locationIcon : locationIconWhite,
    twitter: theme.palette.mode === 'light' ? twitterIcon : twitterIconWhite,
    blog: theme.palette.mode === 'light' ? blogIcon : blogIconWhite,
    company: theme.palette.mode === 'light' ? companyIcon : companyIconWhite,
  };

  const LinkItem = ({ icon, text }) => {
    return (
      <Grid item xs={isTablet? 6: 12}>
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
                color: theme.palette.mode === 'light' ? 'text.placeHolder' : 'common.white',
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
    <Grid container rowSpacing={isTablet?2.5:1.5}>
      <LinkItem icon={icons.location} text={location} />
      <LinkItem icon={icons.twitter} text={twitter} />
      <LinkItem icon={icons.blog} text={blog} />
      <LinkItem icon={icons.company} text={company} />
    </Grid>
  )
}