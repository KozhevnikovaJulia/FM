import Axios from 'axios';

const apiConstants = {
  baseURL: 'http://ws.audioscrobbler.com/2.0/',
  apiKey: '083dc3061c14d34641c771c93dc27772',
};

export const API = {
  getTopTracks() {
    return Axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=083dc3061c14d34641c771c93dc27772&format=json`);
  },
  getInfoAboutArtist(artist: string) {
    return Axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=083dc3061c14d34641c771c93dc27772&format=json`);
  },
  getSearchTrack(search: string) {
    return Axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${search}&api_key=083dc3061c14d34641c771c93dc27772&format=json`);
  },
};

export type TrackType = {
  artist: ArtistType;
  duration: string;
  image: Array<ImageType>;
  listeners: string;
  mbid: string;
  name: string;
  playcount: string;
  streamable: StreamableType;
  url: string;
};

type ArtistType = {
  name: string;
  mbid: string;
  url: string;
};
type ImageType = {
  '#text': string;
  size: string;
};
type StreamableType = {
  fulltrack: string;
  '#text': string;
};

export type ArtistInfoType = {
  bio: ArtistInfoBioType;
  image: Array<ArtistInfoImageType>;
  name: string;
  ontour: string;
  similar: ArtistInfoSimilarType;
  stats: ArtistInfoStatsType;
  streamable: string;
  tags: ArtistInfoTagsType;
  url: string;
};
type ArtistInfoBioType = {
  content: string;
  links: ArtistInfoLinksType;
  published: string;
  summary: string;
};
type ArtistInfoLinksType = {
  link: ArtistInfoLinkType;
};
type ArtistInfoLinkType = {
  '#text': string;
  href: string;
  rel: string;
};
type ArtistInfoImageType = {
  size: string;
  '#text': string;
};
type ArtistInfoTagsType = {
  tag: Array<ArtistInfoTagType>;
};
type ArtistInfoSimilarType = {
  artist: Array<ArtistInfoArtistType>;
};
type ArtistInfoStatsType = {
  listeners: string;
  playcount: string;
};
type ArtistInfoTagType = {
  name: string;
  url: string;
};
type ArtistInfoArtistType = {
  image: Array<ImageType>;
  name: string;
  url: string;
};

export type SearchTrackType = {
  name: string;
  artist: string;
  url: string;
};
