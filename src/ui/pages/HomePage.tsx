import React from 'react';
import '../../App.css';
import { useDispatch } from 'react-redux';
import { TrackType } from '../../api/Api';
import { Link } from 'react-router-dom';
import { setCurrentArtist } from '../../bll/Reducer';

type HomePagePropsType = {
  topTracks: Array<TrackType>;
};
export const HomePage = (props: HomePagePropsType) => {
  const { topTracks } = props;
  const dispatch = useDispatch();

  return (
    <>
      <h1>TOP TRACKS</h1>
      <div className='topTracks'>
        {topTracks.length > 0 &&
          topTracks.map(track => {
            return (
              <div key={track.playcount} className='topTracks__item'>
                <div>
                  <img src={track.image[0]['#text']} alt='text' />
                </div>
                <div>
                  <Link
                    style={{ fontSize: '20px' }}
                    onClick={() => {
                      dispatch(setCurrentArtist(track.artist.name));
                    }}
                    to='/aboutArtist'
                  >
                    {track.artist.name}
                  </Link>
                </div>
                <div>{track.name}</div>
                <a href={track.artist.url}>{track.artist.url}</a>
              </div>
            );
          })}
      </div>
    </>
  );
};
