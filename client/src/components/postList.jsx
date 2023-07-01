import React from "react";
import { useEffect, useState } from "react";
import PostCard from "./postCard";

const url = "http://localhost:3000/api/posts";

const PostList = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${url}`)
        .then((res) => res.json())
        .then((data) => setPosts(data.posts));
    }, []);

    return (
        <div>
            {posts.map((post) => {
                return (
                    <PostCard
                        key={post.id}
                        title={post.title}
                        description={post.description}
                        image={post.image}
                    />
                );
            })
            }
        </div>
    );
    }

export default PostList;
