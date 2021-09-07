import { Card, CardContent, CardHeader, Container, Grid, makeStyles, TextareaAutosize } from '@material-ui/core';
import { CheckCircleTwoTone, HighlightOffTwoTone } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import { checkPalindrome } from '../functions/checkPalindrome';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "20px",
  },
  name: {
    fontWeight: 600,
  },
  desc: {
    textAlign: "justify",
  },
  textareaWrapper: {
    overflow: "hidden",
  },
  textarea: {
    backgroundColor: "transparent",
    border: "none",
    width: "100%",
    "&:focus": {
      outline: "none",
    }
  },
  checkIcon: {
    textAlign: "right",
    margin: theme.spacing(4)
  }
}))

function Checker() {
  
  const classes = useStyles()
  const [typedText, setTypedText] = useState("")
  const [isPalindrome, setIsPalindrome] = useState(false)

  useEffect(() => {
    return checkPalindrome(typedText) ? setIsPalindrome(true) : setIsPalindrome(false)
  }, [typedText])

  return (
    <React.Fragment>

      <Container maxWidth="sm" className={classes.root}>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          className={classes.main}
        >

          <Grid
            item
            xs={12}
          >
            <Card>
              <CardHeader
                className={classes.name}
                title="Palindrom Checker"
              />
              <CardContent
                className={classes.desc}
                children="A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. You should see whether a text is palindrom or not as the icon changes."
              />
            </Card>         
          </Grid>

          <Grid 
            item
            xs={12}
            className={classes.textareaWrapper}
          >
            <Card>
              <CardContent>
                <TextareaAutosize
                  className={classes.textarea}
                  minRows="10"
                  value={typedText} 
                  onChange={(e) => setTypedText(e.target.value)}
                  placeholder="Enter your text here to check"
                />
              </CardContent>
            </Card>

          </Grid>

          <Grid
            item 
            xs={12}
            className={classes.checkIcon}
            children={isPalindrome ? <CheckCircleTwoTone color="primary" fontSize="large" /> : <HighlightOffTwoTone color="secondary" fontSize="large" />}
          />

        </Grid>
      </Container>
      
    </React.Fragment>
  )
}

export default Checker