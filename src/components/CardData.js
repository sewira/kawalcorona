import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'gray',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '50px 200px',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '-15px',
  },
  title: {
    maxWidth: '150px',
  },
});

const CardData = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent
            display="flex"
            justifyContent="center"
            alignItems="center"
            className={classes.center}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
              //   className={classes.center}
            >
              {props.title}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              //   className={classes.center}
            >
              {props.number}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CardData;
