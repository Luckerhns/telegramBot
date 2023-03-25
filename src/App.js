import React, { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";

const App = () => {
  const { tg } = useTelegram();
  
  useEffect(() => {
    tg.ready()
  });

  return (
    <div>
      <button>toggle</button>
    </div>
  );
};

export default App;
