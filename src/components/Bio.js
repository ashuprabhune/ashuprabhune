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
      main: '#6a6c6c',
    },
    ternary:{
      main: '#37393a',
    }
  },
});



const useStyles = makeStyles((theme) => ({
  root: {
    minWidth:350,
    color:'white',

    height: "100%",
    boxShadow: "8px 8px 5px #222424",
    borderRadius: '10px',
    padding:'auto',
    ["@media(max-width: 1200px )"]:{

    },
    fontFamily: 'Open Sans'

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
    <Card className={classes.root} style={{backgroundColor:"#182f34"}}>
      <ReactMarkdown  source={props.text}
  escapeHtml={false}

/>
      <CardActions style = {{padding:0}}>
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


          <p>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.

            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            nd mussels, tucking them down into the rice, and cook
            again without stirring, uopened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
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


    </Card>
    </ThemeProvider>
  );
}
