import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { getTopTracks } from './bll/Reducer';
import { AppStateType } from './bll/Store';
import { TrackType } from './api/Api';
import { HomePage } from './ui/pages/HomePage';
import { Header } from './ui/components/Header';
import { SearchPage } from './ui/pages/SearchPage';
import { AboutArtistPage } from './ui/pages/AboutArtistPage';
import image from './pexels-vishnu-r-nair-1105666.jpg';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopTracks());
  }, []);
  const topTracks = useSelector<AppStateType, Array<TrackType>>(state => state.app.topTracks);

  return (
    <div className='App'>
      <Header />
      <div style={{ backgroundImage: `url(${image})`, width: '100%', height: '250px', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <Switch>
        <Route exact path={'/home'} render={() => <HomePage topTracks={topTracks} />} />
        <Route exact path={'/search'} render={() => <SearchPage />} />
        <Route exact path={'/aboutArtist'} render={() => <AboutArtistPage />} />
        <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>} />
        <Redirect from={'*'} to={'/home'}></Redirect>
      </Switch>
    </div>
  );
}

export default App;
