import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
	// const [count, setCount] = useState(0);

	return (
		<div>
			{/* <div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div> */}

			<Header />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
