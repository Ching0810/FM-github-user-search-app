import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import sunIcon from '../assets/icon-sun.svg'
import sunHoverIcon from '../assets/icon-sun-hover.svg'
import moonIcon from '../assets/icon-moon.svg'
import moonHoverIcon from '../assets/icon-moon-hover.svg'
import Image from 'mui-image';
import { Typography } from '@mui/material';
import { useReference } from '../context/userInfoContext';
import { useState } from 'react';

// mode switch button inside Header component
export default function ModeButton({setMode}) {
  // state variable to decide whether button is hover or not
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const {theme} = useReference()

  // common styles for Typography
  const commonStyles = {
    textTransform: 'uppercase',
    letterSpacing: 2.5,
    marginRight: 1,
  };

  return (
    <Stack spacing={2} direction="row">
      <Button 
        variant="text"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          '&:hover': {
            backgroundColor:theme.palette.mode === 'light'? theme.palette.common.lightWhite: 'common.black',
          }
        }}
        onClick={() => {
          if (theme.palette.mode === 'light') {
            setMode('dark')
          } else {
            setMode('light')
          }
        }
      }>
        {theme.palette.mode === 'light' ? 
          <>
            <Typography 
              variant='h4'
              sx={{ 
                ...commonStyles,
                color: isHovered?'text.logo':'text.dark',
              }}
            >
              dark
            </Typography>
            {isHovered ? (
              <Image duration={0} src={moonHoverIcon} width={20} height={20} />
            ) : (
              <Image duration={0} src={moonIcon} width={20} height={20} />
            )}
          </> : 
          <>
            <Typography 
              variant='h4'
              sx={{ 
                ...commonStyles,
                color: isHovered?'text.hoverDark':'text.light',
              }}
            >
              light
            </Typography>
            {isHovered?(
              <Image duration={0} src={sunHoverIcon} width={20} height={20}/>
            ):(
              <Image duration={0} src={sunIcon} width={20} height={20}/>
            )}
          </> 
        }
      </Button>
    </Stack>
  );
}
