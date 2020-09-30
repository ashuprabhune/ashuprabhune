import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { createMuiTheme,ThemeProvider  } from '@material-ui/core/styles';
import LocationCityTwoToneIcon from '@material-ui/icons/LocationCityTwoTone';
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';

import Avatar from '@material-ui/core/Avatar';
const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#4faeae",
    },
    secondary: {
      main: '#6a6c6c',
    },
    ternary:{
      main: '#37393a',
    }
  },
});

const useStyles = makeStyles({
  root: {
    height:450,
    color:"white",
    borderRadius:"10px",
    paddingBottom:"0",
    backgroundColor:"#2b2d2d",
    boxShadow: "8px 8px 5px #222424",
    fontFamily: 'Open Sans'
  },
  media: {
    height: 140
  },
  html: {
    fontSize: 12
  },
  smallIcon: {
    width: 2,
    height: 2,
  },
  header:{
    height:'30%',
  },
  avatar: {
    width: 100,
    height: 100,
    margin: 'auto',
    zIndex: 10,
    top:10
  },
  description:{
    height:'60%',

  },
  button:{
    display: "flex",
    justifyContent: "space-between",
    bottom:0

  },
  python:{
    backgroundColor: '#ffbf00',
    color:'black'
  },
  java:{
    backgroundColor: '#5382a1',
    color:'white'
  },
  reactJS:{
    backgroundColor: '#61DBFB',
    color:'black'
  },
  mysql:{
    backgroundColor: '#f89820',
    color:'black'
  },
  javascript:{
    backgroundColor: '#ffbf00',
    color:'black'
  },
  cpp:{
    backgroundColor: '#00008b',
    color:'white'
  },
  linux:{
    backgroundColor: '#dd4814',
    color:'white'
  },
  typography: {
    nowrap : "true",
    fontFamily: 'Open Sans'
  }


});

const useStyles1 = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  },
  typography: {
    nowrap : "true"
  }

}));



export default function MediaCard(props) {
  const classes = useStyles();
  const classes1 = useStyles1();
  const colors = {'Python':'python',
                  'Java':'java',
                  'ReactJS':'reactJS',
                  'JavaScript':'javascript',
                  'Linux':'linux',
                  'MySQL':'mysql',
                  'C++':'cpp',
                  'clojure' : 'clojure'
                  };
  let classname=[]
  return (
  <ThemeProvider theme={theme}>
    <Card className={classes.root} >

      <CardActionArea className={classes.header} style={{backgroundColor:"#404242"}}>
        <div className={classes1.root}>
          {props.topics.map((index) => {
            return <Chip  color="secondary" className= {classes[colors[index]]} key={index} size="small" style={{ fontSize: 10, boxShadow: "1px 1px 1px #2b2d2d "}}  label={index} />
          })}
        </div>
          <Avatar  className={classes.avatar}  src={props.avatarUrl} />
      </CardActionArea>


      <CardActionArea className={classes.description} style={{backgroundColor:"#2b2d2d"}}>
        <CardContent  align="center">
          <Typography gutterBottom  variant="h5" component="h2">
              {props.name}
          </Typography>
        </CardContent>
        <CardContent  align="flex-start">
          <Typography className={classes.typography} variant="body2" color="primary" component="p">
              <div style={{  display: 'flex',  alignItems: 'center' ,color:'white'}}>
              <LocationCityTwoToneIcon color = 'primary' fontSize = "small" style={{   paddingRight: 8, paddingBottom: 4 }} />
              {props.location}
              </div>
          </Typography>
          <Typography className={classes.typography} variant="body2" color="primary" component="p">
            <div style={{  display: 'flex',  alignItems: 'center' ,color:'white'}}>
              <WorkTwoToneIcon color = 'primary' style={{   paddingRight: 8, paddingBottom: 4  }} fontSize = "small" />  {props.profession}
            </div>
          </Typography>
          <Typography className={classes.typography} variant="body2" color="primary" component="p">
            <div style={{  display: 'flex',  alignItems: 'center' ,color:'white'}}>
              <SchoolTwoToneIcon color = 'primary' style={{  paddingRight: 8, paddingBottom: 4 }}  fontSize = "small" />  {props.company}
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>


        <Button style={{width:"50%",backgroundColor:"black",color:"white",textTransform:"none"}}><CardActions><GitHubIcon style={{paddingRight:5}}/>{'  GitHub'}</CardActions></Button>
          <Button  style={{width:"50%",backgroundColor:"#2867B2",color:"white", textTransform:"none"}}><CardActions>Linked<LinkedInIcon/></CardActions></Button>



    </Card>
  </ThemeProvider>


  );
}
