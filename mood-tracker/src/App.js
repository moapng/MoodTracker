import './style/App.css';
import CardComponent from './components/cardComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>MoodTracker!</h1>
          <div class="row">
            <CardComponent />
            <CardComponent />
          </div>
          <div class="row">
            <CardComponent />
            <CardComponent />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
