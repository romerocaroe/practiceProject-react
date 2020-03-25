import React from 'react';
import BookCard from './BookCard';
import Grid from '@material-ui/core/Grid';

export default function ShowBook(props) {
    console.log('showbook');
    console.log(props.books);
    return(
        <div className="ShowBook">
            <Grid style={{padding:'24px', color: '#455a64'}} container spacing={10}>
            {(props.books.length > 0) ? (
                (props.books.map((book, index) =>
                    <Grid key={index} item xs={12} sm={4} md={4} lg={3}>
                    <BookCard title={book.title} author={book.author} img={book.img} />
                    </Grid>
                ))
            ) : null
            } 
            </Grid>
        </div>
    );
}