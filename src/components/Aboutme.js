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
    minWidth:350,
    height:350,
    color:"white",
    borderRadius:"10px",
    paddingBottom:"0",
    backgroundColor:"#2b2d2d",
    boxShadow: "8px 8px 5px #222424"
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
    height:105,



  },
  avatar: {
    width: 80,
    height: 80,
    margin: 'auto',
    zIndex: 10,
    top:10
  },
  description:{
    height:200,

  },
  button:{
    display: "flex",
    justifyContent: "space-between",
    bottom:0

  },

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

  return (
  <ThemeProvider theme={theme}>
    <Card className={classes.root} >

      <CardActionArea className={classes.header} style={{backgroundColor:"#404242"}}>
        <div className={classes1.root}>
          {props.topics.map((index) => {
            return <Chip color="secondary" key={index} size="small" style={{ fontSize: 10, color:"white", boxShadow: "1px 1px 1px #2b2d2d "}}  label={index} />
          })}
        </div>
          <Avatar  className={classes.avatar}  src={props.avatarUrl} />
      </CardActionArea>


      <CardActionArea className={classes.description} style={{backgroundColor:"#2b2d2d"}}>
        <CardContent  align="left">
          <Typography gutterBottom  variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography className={classes.typography} variant="body2" color="primary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>


        <Button style={{width:"50%",backgroundColor:"black",color:"white",textTransform:"none"}}><CardActions><GitHubIcon style={{paddingRight:5}}/>{'  GitHub'}</CardActions></Button>
          <Button  style={{width:"50%",backgroundColor:"#2867B2",color:"white", textTransform:"none"}}><CardActions>Linked<LinkedInIcon/></CardActions></Button>



    </Card>
  </ThemeProvider>


  );
}
