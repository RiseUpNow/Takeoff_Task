import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store, {manipulate, login, logout, checkAuth} from './redux/store.js'

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App data={store.getState()} logout={logout} checkAuth={checkAuth} manipulate={manipulate} login={login}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree();
store.subscribe(() => {
    rerenderEntireTree();
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
