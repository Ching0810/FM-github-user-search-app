import { Stack, Typography } from "@mui/material"
import ModeButton from "./ModeButton"

// Header component which contain logo and mode switch button
export default function Header({mode, setMode}) {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: '730px', height: '38px' }}
      >
        <Typography 
          variant="h1"
          sx={{
            color: (theme) =>
              theme.palette.mode === 'light'
              ? 'text.light'
              : 'text.dark',
          }}
        >
          devfinder
        </Typography>
        <ModeButton mode={mode} setMode={setMode}/>
      </Stack>
    </>
  )
}