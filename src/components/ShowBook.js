import React from 'react';
import BookCard from './BookCard';
import Grid from '@material-ui/core/Grid';

export default function ShowBook(props) {
    return(
        <Grid container spacing={0}>
            <Grid item xs={11} style={{margin: '1em'}}>
                <Grid container spacing={10} justify="center">
                {(props.books.length > 0) ? (
                    (props.books.map((book, index) =>
                        <Grid item key={index} xs={10} sm={4} 
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-start">
                            <BookCard title={book.title} author={book.author} img={book.img} />
                        </Grid>
                    ))
                ) : null
                } 
                </Grid>
            </Grid>
        </Grid>
    );
}