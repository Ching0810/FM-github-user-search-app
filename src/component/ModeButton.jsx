import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import sunIcon from '../assets/icon-sun.svg'
import moonIcon from '../assets/icon-moon.svg'
import { Typography } from '@mui/material';

// mode switch button inside Header component
export default function ModeButton({mode, setMode}) {

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
          if (mode === 'light') {
            setMode('dark')
          } else {
            setMode('light')
          }
        }
      }>
        {mode === 'light' ? 
          <>
            <Typography 
              variant='h4'
              sx={{ 
                ...commonStyles,
                color: 'text.light',
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
                color: 'text.dark',
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
