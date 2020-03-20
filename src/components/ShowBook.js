import React from 'react';
import BookCard from './BookCard';
import Grid from '@material-ui/core/Grid';

export default function ShowBook(props) {
    return(
        <div className="ShowBook">
            <Grid style={{padding:'24px', color: '#455a64'}} container spacing={10}>
            {props.books.map((book, index) =>
                <Grid key={index} item xs={12} sm={4} lg={4}>
                <BookCard title={book.title} author={book.author} img={book.img} />
                </Grid>
            )}
            </Grid>
        </div>
    );
}