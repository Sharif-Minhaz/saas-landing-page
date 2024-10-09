import "./App.css";
import Download from "./components/sections/Download";
import Faq from "./components/sections/Faq";
import Features from "./components/sections/Features";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Pricing from "./components/sections/Pricing";
import Testimonial from "./components/sections/Testimonial";

function App() {
	return (
		<main className="overflow-hidden">
			<Header />
			<Hero />
			<Features />
			<Pricing />
			<Faq />
			<Testimonial />
			<Download />
			<Footer />
		</main>
	);
}

export default App;
