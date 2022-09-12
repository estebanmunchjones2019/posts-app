import { useEffect, useCallback  } from 'react';
import './App.css';
import Posts from './components/Posts';
import Widget from './components/Widget';

import { useStore } from  './hooks/store';


function App() {
  const dispatch = useCallback(useStore()[1], []);

  useEffect(() => {
    dispatch('FETCH_POSTS');
  },[dispatch]);

  return (
    <div className="App">
      <Posts />
      <Widget />
    </div>
  );
}

export default App;
