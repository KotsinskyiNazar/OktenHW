import React from 'react';

const Comments = ({comm:{id}}) => {
    return (
        <div>
            <p>{id}</p>
        </div>
    );
};

export default Comments;