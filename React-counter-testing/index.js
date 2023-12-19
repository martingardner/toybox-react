import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './src/Counter/Counter.jsx';
import UsersList from './src/UsersList/UsersList.jsx';
import DataInput from './src/DataInput/DataInput.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter initCount={1} />
    <UsersList />
    <DataInput />
  </React.StrictMode>,
)