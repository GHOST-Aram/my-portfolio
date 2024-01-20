import Header from './components/Header';
import HorizontalLine from './components/HorizontalLine';
import Navbar from './components/Navbar';
import About from './containers/About';
import Hero from './containers/Hero';
import Projects from './containers/Projects';
import Skills from './containers/Skills';

function App() {
	return (
		<div className="App">
			<Header>
				<Navbar />
			</Header>
			<main>
				<Hero />
				<Projects />
				<Skills />
				<About />
			</main>
			<HorizontalLine />
		</div>
	);
}

export default App;