import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter,
	Route,
	Switch
  } from 'react-router-dom';
import Member from './Member';
import React, { Component }  from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
	// render() {
	// 	return (
	// 		<Member />
	// 	);
	// }
	render() {
		return (
		  <BrowserRouter>
			<Switch>
			  <Route path="/" component={Home} exact={true}></Route>
			  <Route path="/members" component={Member} exact={true}></Route>
			  <Route path="/certificates" component={Certificate} exact={true}></Route>
			  <Route path="/vendors" component={Vendor} exact={true}></Route>
			</Switch>
		  </BrowserRouter>
		);
	}
}

export default App;
