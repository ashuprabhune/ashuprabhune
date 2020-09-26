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


const topics = ['Ashish','asas','asdasdas','arwef','ASD','ASDASD','EFAFEF','ASEFGAVG']
console.log(props.info.id);
return (
  <ThemeProvider theme={theme}>
  <Grid container direction="row"  spacing={2} alignItems="center" style={{paddingTop:"5%",paddingBottom:"5%"}}>
    <Grid item xs={12} sm={12} md={4} lg={4}>

      <AboutMe topics={topics} name={props.info.name} company={props.info.company} avatarUrl={props.info.avatarUrl}/>
    </Grid>
    <Grid item xs={12} sm={12} md={8} lg={8}>
      <Bio text={props.info.repository.object.text}/>
    </Grid>
  </Grid>
</ThemeProvider>
)
}
