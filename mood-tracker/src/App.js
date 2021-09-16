import HomePage from './pages/homePage';
import WeatherPage from './pages/weatherPage';
import MoodPage from './pages/moodPage';
import HabitsPage from './pages/habitsPage';
import ThingsOfNotePage from './pages/thingsOfNotePage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Link to="/"><h1>MoodTracker!</h1></Link>
        </header>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/weather">
            <WeatherPage />
          </Route>
          <Route exact path="/mood">
            <MoodPage />
          </Route>
          <Route exact path="/habits">
            <HabitsPage />
          </Route>
          <Route exact path="/Things Of Note">
            <ThingsOfNotePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
