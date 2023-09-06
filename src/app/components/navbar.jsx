"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import Container from '@mui/material/Container';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material'



const pages = ['About me', 'Projects', 'Contact'];

function ResponsiveAppBar() {

  const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    fontFamily: 'inconsolata',
    textTransform:'capitalize'
  },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="relative">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <HeartBrokenIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NB
          </Typography>
          <HeartBrokenIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', fontFamily: 'inherit' , textTransform:'capitalize', display: 'block' ,  mr: 3}}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Button sx={{textTransform:'capitalize',  fontFamily: 'inherit'}} variant="outlined" endIcon={<CloudDownloadIcon/>} color="inherit">
              Resume
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;