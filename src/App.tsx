import React from 'react';
import { GlobalStyles } from './ui/globalstyles';

const App: React.FC = () => {
  return (
    <div className="App">
      <style>{GlobalStyles}</style>
      <header className="App-header">
        <h1>
          hello noobs
        </h1>
      </header>
    </div>
  );
}

export default App;
