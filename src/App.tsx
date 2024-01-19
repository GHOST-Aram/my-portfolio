import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './containers/Hero';
import Projects from './containers/Projects';
import Skills from './containers/Skills';

function App() {
	return (
		<div className="App">
			<Header>
				<Navbar />
			</Header>
			<Hero />
			<Projects />
			<Skills />
		</div>
	);
}

export default App;
