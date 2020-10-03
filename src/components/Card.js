import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import CodeIcon from '@material-ui/icons/Code';
import UpdateIcon from "@material-ui/icons/Update";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FlareIcon from "@material-ui/icons/Flare";
import { createMuiTheme,ThemeProvider  } from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider";
import CardMedia from '@material-ui/core/CardMedia';
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
    Width:350,
    height:'100%',
    color:"white",
    borderRadius:"10px",
    paddingBottom:"0",
    backgroundColor:"#555656",
    boxShadow: "8px 8px 5px #222424",
    display:'flex',
    flexDirection: 'column',
    height:'100%',

  },
  media: {
    height: 180,

  },
  html: {
    fontSize: 12
  },
  smallIcon: {
    width: 2,
    height: 2,
  },
  header:{
    flex: '0 1 15%'

  },
  description:{
    flex: '1',
    alignItems:'flex-start'

  },
  content:{
    display:'flex',
    flexDirection: 'column',
    height:'100%',
    justifyContent:'space-between',
    alignSelf:'flex-start'

  },
  title:{



  },
  info:{



  },
  footer:{
    flex: '1 1 10%'
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
  clojure:{
    backgroundColor: '#62B132',
    color:'white'
  },
  springboot:{
    backgroundColor: '#62B132',
    color:'white'
  },
  html5:{
    backgroundColor: '#e34c26',
    color:'white'
  },
  css:{
    backgroundColor: '#62B132',
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
  let classname=[]
  const colors = {'python':'python',
                  'java':'java',
                  'reactjs':'reactJS',
                  'javascript':'javascript',
                  'linux':'linux',
                  'mysql':'mysql',
                  'c++':'cpp',
                  'cpp':'cpp',
                  'clojure' : 'clojure',
                  'spring-boot' : 'springboot',
                  'html':'html5'
                  };
  const classes = useStyles();
  const classes1 = useStyles1();
  let repoImage = null
   if(props.repoImage)
    repoImage = <div style = {{padding: 15, paddingTop:0}}> <CardMedia
          className={classes.media}
          image={props.imageurl}
          title={props.name}/></div>

        console.log(props.url);


  return (
  <ThemeProvider theme={theme}>
    <Card className={classes.root}>
      <CardActionArea className = {classes.header} style={{backgroundColor:"#274f59" }}>
        <div className={classes1.root}>
          {props.topics.map((index) => {

            return <Chip color="secondary" key={index} className= {classes[colors[index]]} size="small" style={{ fontSize: 12, boxShadow: "1px 1px 1px #2b2d2d ",fontFamily:'Open Sans'}}  label={index} />
          })}
        </div>
        {repoImage}
      </CardActionArea>
      <CardContent className={classes.description} style={{backgroundColor:"#182f34",padding:0,fontFamily:'Open Sans'}}>
        <div className={classes.content}>
        <CardContent className={classes.title} align="left">

          <Typography gutterBottom  variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography className={classes.typography} variant="body2"  component="p">
            {props.description}
          </Typography>
        </CardContent>

        <CardContent className={classes.info} align="left" style={{fontFamily:'Open Sans'}}>
          <Divider light={true} variant="middle" style={{backgroundColor:"#4faeae","marginBottom":15}}/>
          <Typography
            className={classes.html}

            display="block"
            gutterBottom
          >
            <UpdateIcon color="primary" style={{ fontSize: 12 }} label="" />
            {' '}{ props.date} {"on"} {props.commitBranch}
          </Typography>
          <Typography
            variant="caption"

            display="block"
            gutterBottom
          >
            <ChatBubbleOutlineIcon color="primary" style={{ fontSize: 12}} fontSize="small" label="" />
            {' '}{props.messageHeadline}
          </Typography>
          <Typography
            variant="caption"

            display="block"
            gutterBottom
          >
            <FlareIcon color="primary" style={{ fontSize: 12}} fontSize="small" label="" />
            {' '}{props.commitMessage} {" commits"}
          </Typography>
        </CardContent>
      </div>
    </CardContent>
    <CardActionArea target="_blank"  href={props.url} style={{backgroundColor:"#4faeae",fontFamily:'Open Sans'}}>
      <CardActions style={{justifyContent:'center', height:'inherit'}}>
        <CodeIcon style={{height:'100%'}}/>
        Link to Repo
      </CardActions>
    </CardActionArea>


    </Card>
  </ThemeProvider>
  );
}
