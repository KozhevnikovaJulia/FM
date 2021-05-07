import { API, TrackType, ArtistInfoType, SearchTrackType } from '../api/Api';
import { AppStateType } from './Store';

let initialState = {
  topTracks: [] as Array<TrackType>,
  currentArtistInfo: {} as ArtistInfoType,
  currentArtist: '',
  isLoading: false,
  search: '',
  searchTrackInfo: [] as Array<SearchTrackType>,
};

export const Reducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SET_TOP_TRACKS':
      return { ...state, topTracks: action.topTracks };
    case 'SET_CURRENT_ARTIST':
      return { ...state, currentArtist: action.currentArtist };
    case 'SET_ISLOADING':
      return { ...state, isLoading: action.isLoading };
    case 'SET_SEARCH':
      return { ...state, search: action.search };
    case 'SET_CURRENT_ARTIST_INFO':
      return { ...state, currentArtistInfo: action.currentArtistInfo };
    case 'SET_SEARCH_TRACK_INFO':
      return { ...state, searchTrackInfo: action.searchTrackInfo };
    default:
      return state;
  }
};

//Action creators
export const setTopTracks = (topTracks: Array<TrackType>) => ({ type: 'SET_TOP_TRACKS', topTracks } as const);
export const setCurrentArtist = (currentArtist: string) => ({ type: 'SET_CURRENT_ARTIST', currentArtist } as const);
export const setIsLoading = (isLoading: boolean) => ({ type: 'SET_ISLOADING', isLoading } as const);
export const setSearch = (search: string) => ({ type: 'SET_SEARCH', search } as const);
export const setCurrentArtistInfo = (currentArtistInfo: ArtistInfoType) => ({ type: 'SET_CURRENT_ARTIST_INFO', currentArtistInfo } as const);
export const setSearchTrackInfo = (searchTrackInfo: Array<SearchTrackType>) => ({ type: 'SET_SEARCH_TRACK_INFO', searchTrackInfo } as const);

//Thunk creators
export const getTopTracks = () => async (dispatch: any, getState: () => AppStateType) => {
  try {
    dispatch(setIsLoading(true));
    const response = await API.getTopTracks();
    dispatch(setTopTracks(response.data.tracks.track));
    dispatch(setIsLoading(false));
  } catch (error) {}
};
export const getCurrentArtistInfo = (artist: string) => async (dispatch: any, getState: () => AppStateType) => {
  try {
    dispatch(setIsLoading(true));
    const response = await API.getInfoAboutArtist(artist);
    dispatch(setCurrentArtistInfo(response.data.artist));
    dispatch(setIsLoading(false));
  } catch (error) {}
};
export const getSearchTrackInfo = (search: string) => async (dispatch: any, getState: () => AppStateType) => {
  try {
    dispatch(setIsLoading(true));
    const response = await API.getSearchTrack(search);
    dispatch(setSearchTrackInfo(response.data.results.trackmatches.track));
    dispatch(setIsLoading(false));
  } catch (error) {}
};

//types
type ActionsType = ReturnType<typeof setTopTracks> | ReturnType<typeof setCurrentArtistInfo> | ReturnType<typeof setCurrentArtist> | ReturnType<typeof setIsLoading> | ReturnType<typeof setSearch> | ReturnType<typeof setSearchTrackInfo>;

export type InitialStateType = typeof initialState;
