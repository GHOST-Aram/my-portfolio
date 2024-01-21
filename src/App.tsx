import Header from './containers/Header';
import HorizontalLine from './components/HorizontalLine';
import Navbar from './components/Navbar';
import About from './containers/About';
import Hero from './containers/Hero';
import Projects from './containers/Projects';
import Skills from './containers/Skills';
import Footer from './containers/Footer';

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
			<Footer />
		</div>
	);
}

export default App;
