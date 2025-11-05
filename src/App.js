import logo from './logo.svg';
import './App.css';
import Error from './components/Error'
import Header from './components/Header'
import Loader from './components/Loader'
import NewsCard from './components/NewsCard'
import NewsList from './components/NewsList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Error />
        <Loader />
        <NewsCard />
        <NewsList />

      </header>
    </div>
  );
}

export default App;
