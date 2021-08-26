import './App.css';
import{ BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './components/Screens/LandingPage';


function App() {
  return (
    <Router>
      <Header />
      <main className="App">
      <Route path='/' component={LandingPage} />
      
      </main>
      <Footer />
    </Router>
    
  );
}

export default App;
