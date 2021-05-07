import React, { useEffect } from 'react';
import '../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../bll/Store';
import { getCurrentArtistInfo } from '../../bll/Reducer';
import { ArtistInfoType } from '../../api/Api';

type AboutArtistPagePropsType = {};

export const AboutArtistPage = (props: AboutArtistPagePropsType) => {
  const dispatch = useDispatch();
  const isLoading = useSelector<AppStateType, boolean>(state => state.app.isLoading);
  const currentArtist = useSelector<AppStateType, string>(state => state.app.currentArtist);
  const currentArtistInfo = useSelector<AppStateType, ArtistInfoType>(state => state.app.currentArtistInfo);

  useEffect(() => {
    dispatch(getCurrentArtistInfo(currentArtist));
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className='aboutArtistPage'>
      <h1>About artist</h1>
      <h1>{Object.keys(currentArtistInfo).length && currentArtistInfo.name}</h1>
      <div>
        <img src={Object.keys(currentArtistInfo).length ? currentArtistInfo.image[0]['#text'] : ''} alt='artist'></img>
      </div>
      <div>{Object.keys(currentArtistInfo).length && currentArtistInfo.bio.summary}</div>
      <div className='aboutArtistPage__tags'>
        {Object.keys(currentArtistInfo).length &&
          currentArtistInfo.tags.tag.map((tag, index) => {
            return (
              <div key={index} className='aboutArtistPage__tag'>
                <a href={tag.url}>{tag.name}</a>
              </div>
            );
          })}
      </div>
    </div>
  );
};
