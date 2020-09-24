import React from 'react';
import './App.css';
import Main from './components/Main'
import GraphQLClient from './components/Client'

function App() {
  return (
    <div className="App">
      <GraphQLClient>
        <Main />
      </GraphQLClient>
    </div>
  );
}

export default App;
