import React, {useState} from 'react';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {IconButton} from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';
import { yellow, grey } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300,
    maxHeight: 550,
  },
  media: {
    maxWidth: 300,
    minWidth: 200,
    maxHeight: 400,
    minHeight: 250,
  }}));

//estilos typography
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function BookCard(book) {
  const [starIcon, setStarIcon] = useState(false);
  const classes = useStyles();
  const onClick = () => {
    setStarIcon(!starIcon)
  };

  return (
    <div className="BookCard" style={{textAlign: 'center'}}>
        <Card className={classes.root} elevation={3}>
          <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  alt="books"           
                  image={book.img}
                  
                  />
              <CardContent theme={theme}>
                  <Typography gutterBottom variant="h5" component="h2">
                      {book.title}
                  </Typography>
                  <Typography variant="h6" color="textSecondary" component="p">
                      {book.author}
                  </Typography>
              </CardContent>
          </CardActionArea>
          <div style={{align: 'center'}}>
            <CardActions>
                  <IconButton onClick={onClick} style={{color: starIcon ? yellow[600] : grey[600]}}>
                    <StarIcon fontSize="large" />
                  </IconButton>
            </CardActions>
          </div>
        </Card>
    </div>
  );
}