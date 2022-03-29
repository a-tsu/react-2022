import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Content} from './Content';
import { QueryClient, QueryClientProvider } from 'react-query';


const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
        <QueryClientProvider client={queryClient}>
          <Content />
        </QueryClientProvider>
    </>
  );
}

export default App;
