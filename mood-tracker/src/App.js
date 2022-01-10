import HomePage from './pages/homePage';
import WeatherPage from './pages/weatherPage';
import MoodPage from './pages/moodPage';
import HabitsPage from './pages/habitsPage';
import ThingsOfNotePage from './pages/thingsOfNotePage';
import { Route, Switch, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './style/App.css';
import UserPage from './pages/userPage';

function App() {
  const activeUser = useSelector((state) => { return state.activeUser });

  return (
    <div className='App'>
      <header className='App-header'>
        <Link to='/user' className='userHeader'>{activeUser}</Link>
        <Link to='/'><h1>MoodTracker!</h1></Link>
      </header>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/user'>
          <UserPage />
        </Route>
        <Route exact path='/weather'>
          <WeatherPage />
        </Route>
        <Route exact path='/mood'>
          <MoodPage />
        </Route>
        <Route exact path='/habits'>
          <HabitsPage />
        </Route>
        <Route exact path='/Things Of Note'>
          <ThingsOfNotePage />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
