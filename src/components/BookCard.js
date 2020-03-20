import React from 'react';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import StarBorderIcon from '@material-ui/icons/StarBorder';
//import StarIcon from '@material-ui/icons/Star';
import { yellow } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 600,
    },
  });

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function BookCard(book) {
    
  const classes = useStyles();

  return (
    <div className="BookCard">
        <Card className={classes.root} elevation={3}>
        <CardActionArea>
            <CardMedia
            component="img"
            alt="books"
            minHeight="50"            
            maxHeight="50"            
            minWidth="50"            
            maxWidth="50"            
            image={book.img}
            />
            <CardContent theme={theme}>
                <Typography gutterBottom variant="h4" component="h2">
                    {book.title}
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p">
                    {book.author}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Grid style={{testAlign:'center'}}>
                <StarBorderIcon onClick={()=>(alert("test"))} style={{color: yellow[600]}} />
            </Grid>
        </CardActions>
        </Card>
    </div>
  );
}