import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';


const App = () => {
    return (
        <div className="ui container comments">
           <CommentDetail 
                author="Bill" 
                timeAgo="Today at 4:30AM" 
                img={faker.image.avatar()} 
                text="Great Post"
           />
           <CommentDetail 
                author="Billy" 
                timeAgo="Today at 6:30PM" 
                img={faker.image.avatar()}
                text="nice"
            />
           <CommentDetail 
                author="Willy"
                timeAgo="Tomorrow at 13:00PM" 
                img={faker.image.avatar()}
                text="f"
            />
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);