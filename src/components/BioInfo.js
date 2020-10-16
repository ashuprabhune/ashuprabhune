import moment from 'moment'
import React  from 'react'
import Card from './Card'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Aux from './Auxilliary'
import AboutMe from './Aboutme'
import Bio from './Bio'
import { createMuiTheme,ThemeProvider  } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
})


export default function FullWidthGrid(props) {


const topics = ['Java', 'C++', 'Python', 'ReactJS', 'MySQL', 'Spring Boot','Linux']
console.log(props.info.id);
return (
  <ThemeProvider theme={theme}>

    <Grid item xs={12} sm={12} md={4} lg={4}>

      <AboutMe topics={topics} name={props.info.name} location={props.info.location} company={props.info.company} profession = "Software Engineer" avatarUrl={props.info.avatarUrl}/>
    </Grid>
    <Grid item xs={12} sm={12} md={8} lg={8}>
      <Bio text={props.info.repository.object.text}/>
    </Grid>

</ThemeProvider>
)
}
