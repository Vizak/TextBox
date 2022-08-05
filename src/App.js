import { React } from 'react';
import './App.scss';
import TextBox from './core/components/TextBox';
const App = ({ state, actions }) =>
	<div className="App" role="App">
		<div> {TextBox({ state, actions })} </div>
		<div>{state.text}</div>
	</div>;

export default App;
