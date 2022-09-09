import usePosts from "../hooks/usePosts";

const Posts = () => {

   const posts = usePosts();
   
   const postsJSX = posts.slice(0, 9).map(item => {
        return (
            <li>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
            </li>
        );

    });

    return (
        <div>
          <h2>Posts component</h2>
          <ul>
            {postsJSX}
          </ul>
        </div>
    );
}

export default Posts;