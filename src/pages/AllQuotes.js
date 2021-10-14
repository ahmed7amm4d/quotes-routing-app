import React from "react";

import QuoteList from '../components/quotes/QuoteList';

const dummyQuotes = [
    {
        id: 'q1',
        author: 'Max',
        text: 'Learing React is fun!'
    },
    {
        id: 'q2',
        author: 'Ahmed',
        text: 'Learing Front-End is great!'
    }
];

const AllQuotes = () => {
    return (
        <QuoteList quotes={dummyQuotes} />
    );
};

export default AllQuotes;