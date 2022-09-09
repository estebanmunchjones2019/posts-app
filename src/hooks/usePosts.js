// src/hooks/usePosts.js

// import built in React hooks
import { useEffect, useState } from "react";

// this is the custom hook
const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      const fetchPosts = async() =>{
        const rawPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
        const postsArray = await rawPosts.json();
        setPosts(postsArray);
      }
      fetchPosts();
  }, []);

  return posts;
}

export default usePosts;