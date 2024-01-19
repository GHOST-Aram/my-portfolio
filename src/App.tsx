import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './containers/Hero';

function App() {
	return (
		<div className="App">
			<Header>
				<Navbar />
			</Header>
			<Hero />
		</div>
	);
}

export default App;
