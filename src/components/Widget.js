import "./Widget.css";
import usePosts from "../hooks/usePosts";

const Widget = () => {

    const posts = usePosts();

    const postsJSX = posts.slice(9, 11).map(item => {
        return (
            <li>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
            </li>
        );

    });

    return (
        <div class="Widget">
            <h2>Widget component</h2>
            <ol>
                {postsJSX}
            </ol>
        </div>
    );
}

export default Widget;