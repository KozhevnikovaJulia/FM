import React, { useEffect } from 'react';
import '../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { SearchForm } from '../components/SearchForm';
import { getSearchTrackInfo } from '../../bll/Reducer';
import { AppStateType } from '../../bll/Store';
import { SearchTrackType } from '../../api/Api';

type SearchPagePropsType = {};
export const SearchPage = (props: SearchPagePropsType) => {
  const search = useSelector<AppStateType, string>(state => state.app.search);
  const searchTrackInfo = useSelector<AppStateType, Array<SearchTrackType>>(state => state.app.searchTrackInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchTrackInfo(search));
  }, [search, dispatch]);

  return (
    <div className='searchPage'>
      <SearchForm />
      <div className='searchTracks'>
        {searchTrackInfo.length > 0 &&
          searchTrackInfo.map((searchTrack, index) => {
            return (
              <div key={index}>
                <span>{searchTrack.name}</span>
                <span style={{ color: 'red', marginLeft: '10px' }}>{searchTrack.artist}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};
