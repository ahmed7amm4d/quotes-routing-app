import React from "react";
import { useParams, Route, Link } from "react-router-dom";

import HiglightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/comments';
import Card from '../components/UI/Card';

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

const QuoteDetail = () => {
    const params = useParams();

    const quote = dummyQuotes.find((quote) => {
        return quote.id === params.quoteid
    });

    if (!quote) {
        return (
            <Card>
                <p className='not-found'>No Quote Found!</p>
            </Card>
        );
    }

    return (
        <React.Fragment>
            <HiglightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteid}`} exact>
                <div className="centered">
                    <Link className='btn--flat' to={`/quotes/${params.quoteid}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`/quotes/${params.quoteid}/comments`}>
                <Comments />
            </Route>
        </React.Fragment>
    );
};

export default QuoteDetail;