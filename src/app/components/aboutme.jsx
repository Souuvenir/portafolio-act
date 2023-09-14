'use client'
import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Profilepic from './profilepic'
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';




const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  backgroundColor: 'black',
  color: 'white',
}));

const contentItems = ["● Javascript", "● React", "● Java", "● Mysql", "● Next.js", "● Kotlin"];

const typo = {Roboto: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(',')}

const aboutme = () => {
  return (
    <Container maxWidth="lg">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 10 }}>
        <Grid item xs={6}>
          <Box>
          <Typography sx={{marginBottom: 10}} fontFamily={'inherit'} variant="h4" component="h1" gutterBottom>
            01.About Me
          </Typography> 
          <Typography sx={{marginBottom: 4}} variant="body1" gutterBottom align="justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
            quasi quidem quibusdam.
          </Typography>
          <Typography variant="body1" gutterBottom align="justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
            quasi quidem quibusdam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
            quasi quidem quibusdam.
          </Typography>
          <Typography variant="body1" gutterBottom align="justify">
            neque doloribus? Eumquasi quidem quibusdam:
          </Typography>
          <Grid container spacing={{ xs: 1, md: 0}} columns={{ xs: 4, sm: 8, md: 12 }}>
            {contentItems.map((contenido, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item style={{ textAlign: 'left' }}>{contenido}</Item>
            </Grid>
            ))}
          </Grid>
          </Box>
        </Grid>
        <Grid item align="center" xs={6} sx={{marginTop:15,alignItems:'center'}}>
          <Profilepic/>
        </Grid> 
      </Grid>
    </Container>
  )
}
export default aboutme