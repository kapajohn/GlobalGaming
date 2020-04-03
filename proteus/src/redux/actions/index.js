import {API_KEY} from '../../constants/api_key';
export const SEARCH_RESULTS = 'SEARCH_RESULTS';
export const GET_REF_DATA_GENRES = "GET_REF_DATA_GENRES";

export function searchResults(results) {
  return {
    type: SEARCH_RESULTS,
    results
  }
}

export function getRefDataGenres() {

  const apiURL = 'https://api.themoviedb.org/3/genre/movie/list';
  let URL = `${apiURL}?api_key=${API_KEY}&language=en-US`;
  fetch(URL, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  }).then((response) => {
  response.json().then((data) => {
      const genres = data.genres.map(genre => {
        return  { value: genre.id,
          label: genre.name}
        })
  console.log(genres, 'genres');
  return genres;
  })
  }).catch((error) => console.log(error))
}