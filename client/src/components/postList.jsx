import React from "react";
import { useEffect, useState } from "react";
import PostCard from "./postCard";
import axios from "axios";

const url = "http://localhost:3000/api/posts";

const PostList = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(url, { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} })
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            {posts.map((post) => {
                return (
                    <PostCard
                        key={post.id}
                        title={post.title}
                        description={post.description}
                        image={post.imageUrl}
                    />
                );
            })
            }
        </div>
    );
    }

export default PostList;
