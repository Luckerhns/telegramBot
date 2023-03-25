import React, {useEffect} from 'react'

const tg = window.Telegram.WebApp;
console.log(tg);

const App = () => {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose  = () => {
    tg.close()
  }

  return <div>
    work
    <button onClick={onClose}>Close</button>
  </div>;
};

export default App;
