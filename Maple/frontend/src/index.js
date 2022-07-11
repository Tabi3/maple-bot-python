import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './components/AskWolframAlpha';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/navbar';
import App from './App'
import "./sidebar.css"
import TestPage from './components/TestPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<>
		<NavBar />
		<div className="main">
			<App />
		</div>
	</>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
