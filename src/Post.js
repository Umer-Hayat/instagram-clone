import React from 'react'
import './Post.css';
import { Avatar } from '@material-ui/core/Avatar';


function Post() {
    return (
        <div className="post">
            <h3>username</h3>
            {/* header -> avatar + username */}

            <img className="post__image"
                src="images/react.jpg" alt="react"
            />
            {/* Image */}
            <h4 className="post__text"><strong>Umer Hayat</strong>: Wow very nice</h4>
            {/* username + caption */}
        </div>
    )
}

export default Post
