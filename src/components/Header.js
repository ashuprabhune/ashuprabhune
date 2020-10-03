import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function FullWidthGrid() {
  const [isScrollingUp, setIsScrollingUp] = useState(true)
  const [lastYPos, setLastYPos] = useState(0)
  const classes = useStyles();

  useEffect(() => {
    const handleScroll = () => {
      const Y = window.scrollY
      if (Y < lastYPos - 10) {
        setIsScrollingUp(true)
        setLastYPos(Y)
      } else if (Y > lastYPos + 10) {
        setIsScrollingUp(false)
        setLastYPos(Y)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastYPos])

  return (
    <div className={classes.root}>
    <motion.div
      className='sticky top-0 z-50 py-2 bg-gray-100 bg-opacity-50 backdrop-blur'
      initial={{ opacity: 1 }}
      animate={{
        opacity: isScrollingUp ? 1 : 0,
        y: isScrollingUp ? 0 : '-100px'
      }}
    >
    <AppBar position="static" style={{ background:"#112327", color:"white", boxShadow:"None"}}>

      <Toolbar style={{paddingLeft:0, paddingRight:0}}>

          <Typography variant="h5" className={classes.title}>
            @ashuprabhune
          </Typography>

  <Button   component="a" href="mailto:ashuprabhune@gmail.com" variant="contained" style={{backgroundColor:'#4faeae',fontWeight:600}} ><EmailIcon style={{color:'black', paddingRight:2}}/>   Email Me</Button>


  </Toolbar>
</AppBar>
    </motion.div>
  </div>
  )
}
