import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './containers/Hero';
import Projects from './containers/Projects';

function App() {
	return (
		<div className="App">
			<Header>
				<Navbar />
			</Header>
			<Hero />
			<Projects />
		</div>
	);
}

export default App;
