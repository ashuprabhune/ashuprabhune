import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { motion, AnimatePresence } from 'framer-motion'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { createMuiTheme,ThemeProvider  } from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider";
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const ReactMarkdown = require('react-markdown')
const htmlParser = require('react-markdown/plugins/html-parser')

const parseHtml = htmlParser({
  isValidNode: node => node.type !== 'script',
  processingInstructions: [/* ... */]
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#4faeae",
    },
    secondary: {
      main: '#4faeae',
    },
    ternary:{
      main: '#37393a',
    }
  },
});



const useStyles = makeStyles((theme) => ({
  root: {
    minWidth:350,
    height:'inherit',
    color:'white',
    borderRadius: '10px',
    padding:'auto',
    ["@media(max-width: 1200px )"]:{

    },
    fontFamily: 'Open Sans'

  },
  description:{
    display:'flex',
    flexDirection: 'column',
    height:'100%',

    alignSelf:'flex-start'

  },
  footer:{
    bottom:0,
    display:'flex',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const [readMore, setReadMore] = useState(false)
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={theme}>
    <Card className={classes.root} style={{backgroundColor:"#182f34" ,padding:'3%', position: "relative"}}>
      <CardContent className={classes.description}>
      <ReactMarkdown
        source={props.text}
        escapeHtml={false}/>
      <CardActions style = {{}}>
          <AnimatePresence exitBeforeEnter initial={false}>
                         {readMore ? (
                           <>
                             <motion.div
                               key='show less'
                               initial={{ height: 0, opacity: 0 }}
                               animate={{ height: 'auto', opacity: 1 }}
                               exit={{ height: 0, opacity: 0 }}
                               transition={{ duration: 0.3 }}
                               className='grid grid-flow-row gap-4'
                             >
                               <Button style = {{color: '#F5F5F5', padding:0}}
                                 onClick={() => setReadMore(false)}
                                 className='flex items-center text-sm text-left transition-colors duration-200 hover:text-white text-gray-40'
                               >
                                 <ExpandLessIcon  />
                                 <span style = {{textTransform: 'lowercase'}}>show less</span>
                               </Button>


          <p><Typography>
                      <div
                        style={{

                          paddingTop: 10,
                          fontFamily:'Open Sans'
                        }}
                      >
            <div style={{  display: 'flex',  alignItems: 'center' ,color:'white'}}>
            <WorkTwoToneIcon color="secondary" fontSize="medium" style={{   paddingRight: 8, paddingBottom: 4 }}/>


          <i>Senior Software Engineer</i> &nbsp; - &nbsp;Persistent Systems</div>



              <p>I have worked with Persistent Systems Ltd. as a Senior Software Engineer, where I had an excellent opportunity to work with a leading US financial institution that provided settlement service in the foreign exchange markets. My role was to develop various algorithms that facilitated the settlement system. This project has given me extensive knowledge and understanding of the software development life cycle. I was involved right from the requirement gathering to the deployment and maintenance of the software</p></div>

          </Typography>
          </p>

          <p><Typography>


          <List>
              <ListItem>
                <ListItemIcon>
                  <StarTwoToneIcon color="secondary" fontSize="medium" />
                </ListItemIcon>
                <ListItemText primary="Awarded 3rd prize for paper “GestTalk – RealTime Gesture to Speech Conversion Glove” at 3rd International Conference on Data Management, Analytics & Innovation, KL, Malaysia." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <StarTwoToneIcon color="secondary" fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText primary="Recipient of Excellence in Technology Award for research contributions at Persistent Systems." />
                  </ListItem>
            </List>
          </Typography>
          </p>

          </motion.div>
                    </>
                  ) : (
                    <motion.div
                      key='show more'
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <Button style = {{color: '#F5F5F5', padding:0}}
                        onClick={() => setReadMore(true)}>
                        <ExpandMoreIcon  />
                        <span style = {{textTransform: 'lowercase'}}>show more</span>
                      </Button>
                    </motion.div>
                  )}

              </AnimatePresence>
</CardActions>
</CardContent>
<CardContent className={classes.footer}>
    <Typography style={{position: "absolute",
    bottom: 10}}>Thank you for your time! Please feel free to reach out if you have any feedback, suggestion or if I can help you in any way.</Typography>
  </CardContent>
    </Card>
    </ThemeProvider>
  );
}
