import React from 'react';
import { Link } from "react-router-dom";
import "../../App.scss";
import "./post.scss";

const Post = function ({ postImg, postTitle, postTag, postDate }) {
    return (
        <>
            <Link to="/" className="post-container">
                <div className="post-image">
                    <img src={postImg} alt="" />
                </div>
                <div className="post-text">
                    <div className="tag-n-date">
                        <span className="tag">{postTag}</span>
                        <span>{postDate}</span>
                    </div>
                    <h3>{postTitle}</h3>
                </div>
            </Link>
        </>
    )
}

export default Post;