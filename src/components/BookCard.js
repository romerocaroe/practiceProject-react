import React, {useState} from 'react';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {IconButton} from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';
import { yellow, grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0),
    [theme.breakpoints.down('xs')]: {
      width: 280,
      height: 500,
    },
    [theme.breakpoints.up('md')]: {
      width: 260,
      height: 500,
    },
  },
  media: {
    padding: theme.spacing(0),
    [theme.breakpoints.down('xs')]: {
      width: 280,
      height: 380,
    },
    [theme.breakpoints.up('md')]: {
      width: 260,
      height: 380,
    },
  }
}));

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
    <div className="BookCard" style={{paddingBottom: '1em', textAlign: 'center'}}>
        <Card className={classes.root} elevation={3}>
          <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  alt="books"           
                  image={book.img}
                  
                  />
              <CardContent theme={theme}>
                <Typography>
                    {book.title}
                </Typography>
                <Typography color="textSecondary">
                    {book.author}
                </Typography>
                <IconButton onClick={onClick} style={{color: starIcon ? yellow[600] : grey[600]}}>
                  <StarIcon />
                </IconButton>
              </CardContent>
          </CardActionArea>
        </Card>
    </div>
  );
}