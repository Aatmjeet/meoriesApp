import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

// selector to get data from redux store
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles.js'


const Posts = ({ setcurrentID }) =>{
    const posts = useSelector((state) => state.posts);

    const classes = useStyles();
    
    // console.log(posts);
    return(
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {posts.map((post) =>(
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setcurrentID={setcurrentID}/>
                    </Grid>
                ))}
            </Grid>
        )
        // <>
        //     <h1>POSTS</h1>
        //     <Post />
        //     <Post />
        // </>
    )
}

export default Posts;