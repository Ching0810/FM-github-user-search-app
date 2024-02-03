import { Stack, Typography } from "@mui/material"
import ModeButton from "./ModeButton"

// Header component which contain logo and mode switch button
export default function Header({setMode}) {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: '100%', height: '38px' }}
      >
        <Typography 
          variant="h1"
          sx={{
            color: (theme) =>
              theme.palette.mode === 'light'
              ? 'text.logo'
              : 'text.light',
          }}
        >
          devfinder
        </Typography>
        <ModeButton setMode={setMode}/>
      </Stack>
    </>
  )
}