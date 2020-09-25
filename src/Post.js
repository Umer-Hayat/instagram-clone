import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import { db } from './firebase';


function Post({ postId, username, caption, imageUrl }) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        let unsubscribe;
        if (postId) {
            unsubscribe = db
                .collection("posts")
                .dos(postId)
                .collection("documents")
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => doc.data()));
                });
        }
        return () => {
            unsubscribe();
        }
    }, [postId])

    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="Logo"
                    src="/static/images/react.jpg"
                />
                <h3>{username}</h3>
            </div>
            {/* header -> avatar + username */}

            <img className="post__image"
                src={imageUrl} alt="react"
            />
            {/* Image */}
            <h4 className="post__text"><strong>{username}</strong>: {caption}</h4>
            {/* username + caption */}
        </div>
    )
}

export default Post
