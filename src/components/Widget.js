import "./Widget.css";
import { useStore } from '../hooks/store';

const Widget = () => {

    const globalState = useStore()[0];

    const postsJSX = globalState.posts.slice(9, 11).map(item => {
        return (
            <li>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
            </li>
        );

    });

    return (
        <div className="Widget">
            <h2>Widget component</h2>
            <ol>
                {postsJSX}
            </ol>
        </div>
    );
}

export default Widget;