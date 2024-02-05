import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import sunIcon from '../assets/icon-sun.svg'
import moonIcon from '../assets/icon-moon.svg'
import { Typography } from '@mui/material';
import { useReference } from '../context/userInfoContext';

// mode switch button inside Header component
export default function ModeButton({setMode}) {
  
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
                color: 'text.dark',
              }}
            >
              dark
            </Typography>
            <img src={moonIcon} width={20} height={20}/>
          </> : 
          <>
            <Typography 
              variant='h4'
              sx={{ 
                ...commonStyles,
                color: 'text.light',
              }}
            >
              light
            </Typography>
            <img src={sunIcon} width={20} height={20}/>
          </> 
        }
      </Button>
    </Stack>
  );
}
