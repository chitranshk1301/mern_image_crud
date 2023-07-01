import React from "react";
import { useEffect, useState } from "react";
import PostCard from "./postCard";
import axios from "axios";
import { Grid } from "@mui/material";
import Item from "@mui/material/Grid";

const url = "http://localhost:3000/api/posts";

const PostList = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(url, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="mt-20 mx-20 md:mx-60">
            <Grid container gap={6} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {posts.map((post) => {

                    return (
                        <Item>
                            <PostCard
                                key={post._id}
                                title={post.title}
                                description={post.description}
                                image={post.imageUrl}
                            />
                        </Item>
                    );
                })
                }
            </Grid>
        </div>
    );
}

export default PostList;
