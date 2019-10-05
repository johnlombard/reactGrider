import React from 'react';
import faker from 'faker';


const CommentDetail = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt='avatar' src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className='author'>
                        Test
                    </a>
                </div>
                <div className="metadata">
                    <span className="date">
                        Today
                    </span>
                </div>
                <div className="text">
                    Nice bblog posts
                </div>
            </div>
        </div>
    )
};

export default CommentDetail