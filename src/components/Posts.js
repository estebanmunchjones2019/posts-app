import "./Posts.css"
import { useStore } from '../hooks/store';

const Posts = () => {

   const globalState = useStore()[0];
   
   const postsJSX = globalState.posts.slice(0, 9).map(item => {
        return (
            <li>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
            </li>
        );

    });

    return (
        <div className="Posts">
          <h2>Posts component</h2>
          <ul>
            {postsJSX}
          </ul>
        </div>
    );
}

export default Posts;