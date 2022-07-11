import React, { useState, useEffect } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import Form from './components/AskWolframAlpha';
import NavBar from './components/navbar';
import TestPage from './components/TestPage';
import Login from './components/LoginPage';

function App() {

	let auth = localStorage.getItem("IsLoggedIn")

	return (
		<>
			<p id="bnk4bn12ba">{(auth)? "True": "False"}</p>
			<Router>
				<Routes>
					
					<Route exact path="/" element={<TestPage/>} />

					<Route path="/AskWolframAlpha" element={<Form/>} />

					<Route path="/navbar" element={<NavBar />} />

					<Route path='/login' element={<Login/>}/>

					<Route path="*" element={<TestPage/>}/>
				</Routes>
			</Router>	</>
	)
}

export default App