import {useState, useCallback, useMemo} from 'react';
import APOD from './stars/apod';
import Counter from './counter';
import './App.css';

function App() {
  const [current, setCurrent] = useState(0);
  const [apod, setApod] = useState({});

  const getApod = useCallback(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=e2qku2oDlBekFu7kB92NkCtYi5Yqp4RkfSQG95pA")
        .then(res => res.json())
        .then((data) => setApod(data));
  }, []);

  const planetoryApod = useMemo(() => <APOD apod={apod} loadApod={getApod} />, [apod, getApod]);
  
  return (
    <div className="App">
      <header className="App-header">
        <Counter current={current} onBump={() => setCurrent(current+1)}></Counter>
        {planetoryApod}
      </header>
    </div>
  );
}

export default App;
