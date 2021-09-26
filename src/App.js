// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Review from './components/Review/Review';

function App() {
  return (
    <div>
      {/* calling header component */}
      <Header></Header>
      {/* calling Review component */}
      <Review></Review>
    </div>
  );
}

export default App;
