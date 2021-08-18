import './style/App.css';
import CardComponent from './components/cardComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>MoodTracker!</h1>
          <div class="row">
            <CardComponent src="../icons/cloudy.png" alt="Image of a sun and a cloud" name="weather" />
            <CardComponent src="../icons/mood.icon.png" alt="Image of a few different moods; happy, sad, angry" name="mood" />
          </div>
          <div class="row">
            <CardComponent src="../icons/checkbox2.png" alt="Image of checkboxes" name="habits" />
            <CardComponent src="../icons/note.png" alt="Image of a generic note" name="things of note" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
